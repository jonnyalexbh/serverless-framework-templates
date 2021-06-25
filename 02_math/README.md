# Serverless Math

**Create Project**

```sh
$ sls create -t aws-nodejs -p math
```

**Invoke**
```sh
$ sls invoke local -f main
$ sls invoke local -f add --path event_json/add.json
```

**Deploy**
```sh
$ sls deploy
```



