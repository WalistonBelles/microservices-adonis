import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'admin@adonis.io',
        name: 'admin',
        password: 'secret',
        role: 'admin'
      },
      {
        email: 'desenvolvedor@adonis.io',
        name: 'desenvolvedor',
        password: 'secret',
        role: 'desenvolvedor'
      },
      {
        email: 'analista@adonis.io',
        name: 'analista',
        password: 'secret',
        role: 'analista'
      },
      {
        email: 'cliente@adonis.io',
        name: 'cliente',
        password: 'secret',
        role: 'cliente'
      },
    ])
  }
}
