import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'

export default class PermissionSeeder extends BaseSeeder {
  public async run () {
    await Permission.createMany([
      {
        name: "Tela Inicial"
      },
      {
        name: "Login"
      },
      {
        name: "Edição de Usuário"
      },
      {
        name: "Painel Administrativo"
      },
    ])
  }
}
