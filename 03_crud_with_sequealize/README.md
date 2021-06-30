# Serverless crud with sequealize

**Create Project**

```sh
$ sls create -t aws-nodejs -p crud_with_sequealize
```

**Invoke**
```sh
$ sls invoke local -f authors
```

## Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

### `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| sequelize                       | ORM                                                                   |
| pg                              | Driver database                                                       |
| pg-hstore                       | Driver database                                                       |
| serverless-sequelize-migrations | A plugin to manage sequelize migrations on serverless projects        |
| pino                            | Logging library                                                       |
| pino-pretty                     | Module can be used to format logs                                     |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| serverless-offline              | Emulates AWS λ and API Gateway                                         |
| eslint                          | Linter for JavaScript                                                  |

### Migrations
```sh
$ sls migrations create --name authors
$ sls migrations create --name publications
$ sls migrations up
$ sls migrations down
$ sls migrations reset
$ sls migrations list
```

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

### Deploy
```sh
$ sls deploy
```
