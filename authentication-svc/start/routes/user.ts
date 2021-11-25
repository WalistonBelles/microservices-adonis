import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/register', 'User/Register.store')
Route.put('/user/register', 'User/Register.update')

Route.post('/user/recover-password', 'User/RecoverPassword.store')
Route.put('/user/recover-password', 'User/RecoverPassword.update')
