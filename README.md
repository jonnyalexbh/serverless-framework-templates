# Serverless Framework

**Install**

```sh
$ npm install -g serverless
$ npm install -g serverless@1.78.1
```

**Install AWS EB CLI**

```sh
$ brew install awsebcli
$ eb --version
$ which python
$ aws configure --profile <profile_name>
```

### `Serverless`

| Command                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| sls -v                          | Version                                                               |
| sls deploy -v                   | Deploy a Serverless service                                           |
| sls remove -v                   | Remove the deployed service                                           |
| sls -h                          | Available options                                                     |

**Create Project**

```sh
$ sls create -t <template> -p <name_project>	
```

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

### Using .nvmrc

```sh
$ touch .nvmrc
$ nvm use
```

## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function
  * Use UpperCase for Constant Variable
  * Use snake_case for file name

### License

MIT
