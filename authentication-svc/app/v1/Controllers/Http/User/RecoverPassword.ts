import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/RecoverPassword'
import { User, UserKey } from 'App/Models'
import faker from 'faker'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class AuthController {
  public async store({ request, response }: HttpContextContract) {
    const { email } = await request.validate(StoreValidator);

    const user = await User.findByOrFail('email', email)

    const key = `${faker.datatype.number()}`;

    user.related('keys').create({ key });

    await Mail.send((message) => {
      message.to(email)
      message.from('no-reply@superia.com', 'Superia')
      message.subject('Recuperação de Senha')
      message.htmlView('emails/account/recover-password', { key })
    });

    return response.status(201).send({
      message: 'Foi enviado um token para o seu email para recuperar sua senha.!'
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator)

    const userKey = await UserKey.findByOrFail('key', key)

    const user = await userKey.related('user').query().firstOrFail();

    userKey.load('user')

    user.merge({ password })

    await user.save()

    await userKey.delete()

    await Mail.send((message) => {
      message.to(user.email)
      message.from('no-reply@superia.com', 'Superia')
      message.subject('Alteração de Dados')
      message.htmlView('emails/account/changed-password')
    });

    return response.status(201).send({
      message: 'Senha alterada com sucesso!'
    })
  }
}
