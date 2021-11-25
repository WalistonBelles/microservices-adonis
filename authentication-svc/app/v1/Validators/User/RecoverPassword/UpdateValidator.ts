import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    key: schema.string({ trim: true}, [ rules.exists({ table: 'user_keys', column: 'key'}) ]),
    password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmation')])
  })

  public cacheKey = this.ctx.routeKey;

  public messages = {
    "key.required": "Insira a chave de acesso que você recebeu por email",
    "key.exists": "Chave inválida",
    "password.required": "Insira uma senha",
    "password.confirmed": "Confirme sua senha",
    "password.passwordConfirmation": "As senhas devem ser iguais"
  };
}
