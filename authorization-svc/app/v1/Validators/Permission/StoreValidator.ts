import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(
      { trim: true },
      [
        rules.unique({ table: 'permissions', column: 'name'})
      ]
    )
  })

  public messages = {}
}
