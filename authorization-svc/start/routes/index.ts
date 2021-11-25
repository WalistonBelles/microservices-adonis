import Route from '@ioc:Adonis/Core/Route'
import './permission'

Route.get('/', async () => {
  return { hello: 'world' }
})
