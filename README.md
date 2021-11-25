<div>
  <center>
  <img src="./assets/logo.png" width="100" alt="adonis">
  
  # Microservices-Adonis

Um projeto para estudo de construção e consumo microserviços utilizando Adonis.js e Typescript
<br>

![Badge](https://img.shields.io/github/issues/WalistonBelles/facebook-frontend?color=green)
![Badge](https://img.shields.io/github/forks/WalistonBelles/facebook-frontend)
![Badge](https://img.shields.io/github/stars/WalistonBelles/facebook-frontend)
![Badge](https://img.shields.io/apm/l/vim-mode)

  </center>
</div>
<br>
<h2> 🍸 Authentication Service </h2>

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

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

<h2> 🍸 Authorization Service </h2>

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

| METHOD | ENDPOINT | DESCRIPTION |
| :----- | :------- | :---------- |
| POST   | /auth    | Login       |
| DELETE | /auth    | Logout      |

<br>

<h2> 🕵🏾‍♂️  Routes Authorization Service </h2>

| METHOD | ENDPOINT                 | DESCRIPTION                        |
| :----- | :----------------------- | :--------------------------------- |
| GET    | /permission              | List all permissions               |
| POST   | /permission/register     | Create new permission              |
| POST   | /permissionUser/register | Associate a permission with a user |

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
