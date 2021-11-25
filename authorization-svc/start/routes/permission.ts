import Route from "@ioc:Adonis/Core/Route";

Route.get('/permission/', 'Permission/Main.index').middleware("auth")
Route.post('/permission/register', 'Permission/Register.store').middleware("auth")
Route.post('/permissionUser/register', 'PermissionUser/Register.store').middleware("auth")
