# Serverless Framework

**Install**

```sh
$ npm install -g serverless
```

**Create Project**

```sh
$ sls create -t aws-nodejs -p hello_world	
```

**Invoke**
```sh
$ sls invoke local -f hello
$ sls invoke local -f hello -d '{"name": "jonnyalexbh"}'
```

**Deploy**
```sh
$ sls deploy
$ sls deploy --aws-profile aws-training
$ sls remove --aws-profile aws-training
```



