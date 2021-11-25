import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StoreValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.exists({ table: 'users', column: 'email' })
    ])
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'Informe o email.',
    'email.unique': 'E-mail já cadastrado.'
  }
}
