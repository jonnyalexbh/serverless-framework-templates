# Serverless middy middleware

**Create Project**

```sh
$ sls create -t aws-nodejs -p middy_middleware
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
| @middy/core                     | Node.js middleware engine for AWS Lambda                              |
| @middy/http-json-body-parser    | HTTP json body parser middleware for the middy framework              |


### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| eslint                          | Linter for JavaScript                                                  |
| serverless-offline              | Emulates AWS λ and API Gateway                                         |

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

### Deploy
```sh
$ sls deploy
```
