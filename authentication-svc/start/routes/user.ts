import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/register', 'User/Register.store')
Route.put('/user/register', 'User/Register.update')
