import Route from "@ioc:Adonis/Core/Route";

Route.get('/permission/', 'Permission/Main.index').middleware("auth")
Route.put('/permission', 'Permission/Main.update').middleware(["auth", 'acl: admin,desenvolvedor'])
Route.delete('/permission/:id', 'Permission/Main.destroy').middleware(["auth", 'acl: admin,desenvolvedor'])
Route.post('/permission/register', 'Permission/Register.store').middleware(["auth", 'acl: admin,desenvolvedor'])

Route.post('/permissionUser/register', 'PermissionUser/Register.store').middleware("auth")
Route.delete('/permissionUser/remove/:id', 'PermissionUser/Main.destroy').middleware(["auth", 'acl: admin,desenvolvedor'])
