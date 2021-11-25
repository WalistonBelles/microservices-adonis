import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Permission'
import Permission from 'App/Models/Permission'

export default class PermissionsController {
  public async store({ request }: HttpContextContract) {
    const { name } = await request.validate(StoreValidator)
    const permission = await Permission.create({name});

    return permission
  }
}
