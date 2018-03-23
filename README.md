# Node.js demo

Demo of Node.js using a minimal server / storage implementation.

## Run locally

```js
npm install
npm start
```

## How to use

### Insert documents

```sh
curl -H 'Content-Type: application/json' -X PUT -d '{"name":"alice"}' http://localhost:8080/docs
curl -H 'Content-Type: application/json' -X PUT -d '{"name":"bob"}' http://localhost:8080/docs
```

### Find documents

```sh
curl http://localhost:8080 # all documents
curl http://localhost:8080?name=alice # find by property value
```
