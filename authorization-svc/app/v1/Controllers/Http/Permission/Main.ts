import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Permission'
import Permission from 'App/Models/Permission'

export default class PermissionsController {
  public async index({ auth }: HttpContextContract) {
    const permission = await Permission.query().orderBy('id', 'asc')
    return permission;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ }: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {}
}
