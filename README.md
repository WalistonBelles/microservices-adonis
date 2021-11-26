<div align="center">
  <img src="./assets/logo.png" width="100" alt="adonis">

# Microservices-Adonis

Um projeto para estudo de construção e consumo de microserviços de Autenticação e Autorização utilizando Adonis.js e Typescript
<br>

![Badge](https://img.shields.io/github/issues/WalistonBelles/facebook-frontend?color=green)
![Badge](https://img.shields.io/github/forks/WalistonBelles/facebook-frontend)
![Badge](https://img.shields.io/github/stars/WalistonBelles/facebook-frontend)
![Badge](https://img.shields.io/apm/l/vim-mode)

</div>
<br>

<h2> 🍸 Authentication Service Build</h2>

```bash
# go to authentication-svc
$ cd authentication-svc

# Create container with MySQL
$ docker-compose up -d

# Create your .env file using .env.example as an example

# install dependencies
$ npm install

# Create database structure
$ node ace migration:run

#optional (create initial users)
$ node ace db:seed

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

<h2> 🍸 Authorization Service Build</h2>

```bash
# go to authorization-svc
$ cd authorization-svc

# Create your .env file using .env.example as an example

# install dependencies
$ npm install

# Create database structure
$ node ace migration:run

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

<h2> 🕵🏾‍♂️  Routes Authentication Service </h2>

| METHOD | ENDPOINT               | DESCRIPTION                       |
| :----- | :--------------------- | :-------------------------------- |
| POST   | /auth                  | Login                             |
| DELETE | /auth                  | Logout                            |
| POST   | /user/register         | Create Account                    |
| PUT    | /user/register         | Validate Account                  |
| POST   | /user/recover-password | Generate Token to Recover Account |
| PUT    | /user/recover-password | Use token and recover password    |

<br>

<h2> 🕵🏾‍♂️  Routes Authorization Service </h2>

| METHOD | ENDPOINT                   | DESCRIPTION                           |
| :----- | :------------------------- | :------------------------------------ |
| GET    | /permission                | List all permissions                  |
| PUT    | /permission                | Update permission                     |
| DELETE | /permission/:id            | Delete permission                     |
| POST   | /permission/register       | Create new permission                 |
| POST   | /permissionUser/register   | Associate a permission with a user    |
| DELETE | /permissionUser/remove/:id | Disassociate a permission with a user |

<br>

<h2> 👨🏾‍💻 Techs </h2>
<li> Adonis.js </li>
<li> Typescript </li>
<br>

<h2> 👤 Author </h2>

<h3> <b> Waliston Belles </b></h3>

<li> Github: <a href="https://github.com/WalistonBelles">@walistonbelles</a> </li>
<li> Linkedin: <a href="https://www.linkedin.com/in/waliston-belles-88927a212/">@walistonbelles</a> </li>
<li> Discord:  Waliston#0145</a></li>
<br>
