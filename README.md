# npc-redis

A redis adapter for [node-push-cluster](https://github.com/Lanfei/node-push-cluster). It allows you to scale `node-push-cluster` horizontally across multiple machines.

## Installation

```bash
$ npm install npc-redis
```

## Usage

```js
var server = npc.createServer({
	broker: require('npc-redis')(6379, 'localhost')
});
```
