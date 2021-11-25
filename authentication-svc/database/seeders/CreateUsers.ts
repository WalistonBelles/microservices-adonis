import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'admin@adonis.io',
        password: 'secret',
        role: 'admin'
      },
      {
        email: 'moderador@adonis.io',
        password: 'secret',
        role: 'moderador'
      },
      {
        email: 'normal@adonis.io',
        password: 'secret',
        role: 'normal'
      },
    ])
  }
}