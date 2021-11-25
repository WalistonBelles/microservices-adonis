import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/RecoverPassword'
import { User, UserKey } from 'App/Models'
import faker from 'faker'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class AuthController {
  public async store({ request }: HttpContextContract) {
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
  }

  public async update({ request }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator)

    const userKey = await UserKey.findByOrFail('key', key)

    userKey.load('user')

    console.log(password)

    userKey.user.merge({ password })

    await userKey.user.save()

    await userKey.delete()

    return { message: 'Senha alterada com sucesso!' }
  }
}
