import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PermissionsController {
  public async destroy({ params, auth }: HttpContextContract) {
    const user = auth.user!

    await user.related('permissions').detach([params.id])
  }
}
