import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permission from 'App/Models/Permission'
import { UpdateValidator } from 'App/Validators/Permission'

export default class PermissionsController {
  public async index({}: HttpContextContract) {
    const permission = await Permission.query().orderBy('id', 'asc')
    return permission;
  }

  public async update({ request, response }: HttpContextContract) {

    const { name, new_name } = await request.validate(UpdateValidator);

    const permission = await Permission.findByOrFail('name', name);

    permission.merge({ name: new_name });

    await permission.save();

    return response.status(201).send({
      message: 'Permissão atualizada'
    })
  }

  public async destroy({ params }: HttpContextContract) {
    const permission = await Permission.findOrFail(params.id);
    permission.delete()
  }
}
