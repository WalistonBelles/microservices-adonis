import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { userRoles } from 'App/Utils'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('email', 255).notNullable()
      table.string('password', 180)
      table.string('remember_me_token').nullable()
      table
        .enu("role", userRoles)
        .notNullable()
        .defaultTo("cliente");
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
