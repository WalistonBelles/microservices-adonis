import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/", "User/Main.store");
  Route.delete("/", "User/Main.destroy").middleware("auth");
}).prefix("/auth")
