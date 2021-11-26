import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    new_name: schema.string({ trim: true })
  })

  public cacheKey = this.ctx.routeKey;

  public messages = {
    "name.required": "Insira o nome da Permissão",
    "new_name.required": "Insira o novo nome da Permissão",
  };
}
