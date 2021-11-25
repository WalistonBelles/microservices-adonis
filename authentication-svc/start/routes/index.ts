import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './user'

Route.get('/', async () => {
  return { hello: 'world' }
}).middleware("auth");

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/account/register')
})
