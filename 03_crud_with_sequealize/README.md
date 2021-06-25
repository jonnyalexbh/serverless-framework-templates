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
| ...                             | ...                                                                   |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| serverless-offline              | Emulates AWS λ and API Gateway                                         |

**Deploy**
```sh
$ sls deploy
```



