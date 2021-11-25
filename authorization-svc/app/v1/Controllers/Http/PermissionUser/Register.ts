import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User, Permission } from 'App/Models'

export default class PermissionsController {
  public async store({ request, response }: HttpContextContract) {
    const { user_id, permission_id } = request.all();
    const user = await User.find(user_id)
    const permissions = await Permission.find(permission_id)

    if (!user) {
      return response.badRequest({
        error: { message: 'Usuário não encontrado' }
      })
    }

    if (!permissions) {
      return response.badRequest({
        error: { message: 'Permissão não encontrada' }
      })
    }

    await user.related('permissions').attach([permissions.id])

    await user.load('permissions');

    return user;
  }
}
