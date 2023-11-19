# pqry v1.2.2
Easier query to pterodactyl v1 panel.
## Editing
Souce code of package writed on ts. ESM and CJS is complied using `tsc` command.
If you want to edit/fork package:
1. Fork or clone using `git clone https://github.com/INotSleep/pqry.git`
2. Edit code
3. Complie using `compile` 
## Installing

```sh
npm install pqry
```

## Usage

1. Get apikey from your panel
2. Import PQRY:

```js
import { PQRY } from "pqry"; // ESM and TS
const { PQRY } = require("pqry"); // CJS
```

3. Specify your host (link to panel) and api:

```js
const pqry = new PQRY({
  host: "https://link.to.panel.com",
  apikey: "your api key"
});
```

4. Use it :)

## Functions
* < > - required
* [  ] - optional
* All functions return `Promise<?>`
#### GetServers()
```js
import { GetServers } from "pqry"; // ESM and TS
const { GetServers } = require("pqry"); // CJS

console.log(await GetServers(<host>, <apikey>))
```
Return list of your servers:
```js
[
{
  server_owner: true,
  identifier: '1a2b3c4d',
  internal_id: 59181,
  uuid: '1a2b3c4d-aab9-48b9-be2f-203eefc1eef0',
  name: 'My Server',
  cpu2: null,
  node: 'MyNode1',
  nest_id: 1,
  sftp_details: { ip: 'my.sftp.link.com', port: 22 },
  description: '',
  limits: {
    memory: 4096,
    swap: 0,
    disk: 40960,
    io: 500,
    cpu: 200,
    threads: null,
    oom_disabled: false
  },
  invocation: 'java -Xmx4096M server.jar nogui',
  docker_image: 'INotSleep:java17',
  egg_features: [ 'eula' ],
  feature_limits: { databases: 0, allocations: 5, backups: 3 },
  status: null,
  is_suspended: false,
  is_installing: false,
  is_transferring: false,
  allocations: [
    {
      id: 36714,
      ip: '12.34.56.78',
      ip_alias: 'my.alias.com',
      port: 25876,
      notes: null,
      is_default: true
    }
  ],
  host: 'https://link.to.panel.com',
  apikey: 'your api key'
}
]
```

You can also make it like this:
```js
pqry.getServers()
```
#### GetApiKeys()
```js
import { GetApiKeys } from "pqry"; // ESM and TS
const { GetApiKeys } = require("pqry"); // CJS

console.log(await GetApiKeys(<host>, <apikey>))
```
Return your api keys:
```js
[
{
  identifier: 'FLWvge36u5Puc9NQ', // this is short name.
  description: '12314234124',
  allowed_ips: [],
  last_used_at: '2022-03-12T00:36:38+03:00',
  created_at: '2022-03-11T19:40:49+03:00',
  host: 'https://link.to.panel.com',
  apikey: 'your api key, not this api key.',
}
]
```
You can also make it like this:
```js
pqry.getApiKeys()
```
#### CreateApiKey()
```js
import { CreateApiKey } from "pqry"; // ESM and TS
const { CreateApiKey } = require("pqry"); // CJS

console.log(await CreateApiKey(<host>, <apikey>, <description>, [allowed_ips]))
```
Return your created api key:
```js
{
  identifier: 'FLWvge36u5Puc9NQ', // this is short name.
  description: '12314234124',
  allowed_ips: [],
  last_used_at: null,
  created_at: '2022-03-11T19:40:49+03:00',
  host: 'https://link.to.panel.com',
  apikey: 'your api key, not this api key.',
}
```
You can also make it like this:
```js
pqry.createApiKey(<description>, [allowed_ips])
```
#### DeleteApiKey()
```js
import { DeleteApiKey } from "pqry"; // ESM and TS
const { DeleteApiKey } = require("pqry"); // CJS

console.log(await DeleteApiKey(<host>, <apikey>, <identifier>))
```
Delete apikey.  
You can also make it like this:
```js
pqry.deleteApiKey(<description>, [allowed_ips])
```
or this:
```js
var apikeys = await pqry.getApiKeys()
apikeys[0].delete()
```
#### GetServer()
```js
import { GetServer } from "pqry"; // ESM and TS
const { GetServer } = require("pqry"); // CJS

console.log(await GetServer(<host>, <apikey>, <identifier>))
```
Return your server:
```js
{
  server_owner: true,
  identifier: '1a2b3c4d',
  internal_id: 59181,
  uuid: '1a2b3c4d-aab9-48b9-be2f-203eefc1eef0',
  name: 'My Server',
  cpu2: null,
  node: 'MyNode1',
  nest_id: 1,
  sftp_details: { ip: 'my.sftp.link.com', port: 22 },
  description: '',
  limits: {
    memory: 4096,
    swap: 0,
    disk: 40960,
    io: 500,
    cpu: 200,
    threads: null,
    oom_disabled: false
  },
  invocation: 'java -Xmx4096M server.jar nogui',
  docker_image: 'INotSleep:java17',
  egg_features: [ 'eula' ],
  feature_limits: { databases: 0, allocations: 5, backups: 3 },
  status: null,
  is_suspended: false,
  is_installing: false,
  is_transferring: false,
  allocations: [
    {
      id: 36714,
      ip: '12.34.56.78',
      ip_alias: 'my.alias.com',
      port: 25876,
      notes: null,
      is_default: true
    }
  ],
  host: 'https://link.to.panel.com',
  apikey: 'your api key'
}
```
You can also make it like this:
```js
pqry.getServer(<identifier>)
```
#### Signal()
```js
import { Signal } from "pqry";
const { Signal } = require("pqry"); // CJS

console.log(await Signal(<host>, <apikey>, <identifier>, <signal>))
```
Applyies state signal to server.
Avlaible signals:
* start
* restart
* stop
* kill
You can also make it like this:
```js
await pqry.signal(<identifier>, <signal>)
```
or this:
```js
var server = await pqry.getServer("1a2b3c4d")

server.power.start()
server.power.restart()
server.power.stop()
server.power.kill()
```
#### SendCommand()
```js
import { SendCommand } from "pqry"; // ESM and TS
const { SendCommand } = require("pqry"); // CJS

console.log(SendCommand(<host>, <apikey>, <identifier>, <command>))
```
Send command to server.
You can also make it like this:
```js
await pqry.sendCommand(<identifier>, <command>)
```
or this:
```js
var server = await pqry.getServer("1a2b3c4d")
server.sendCommand(<command>)
```
#### UsageInfo()
```js
import { UsageInfo } from "pqry"; // ESM and TS
const { UsageInfo } = require("pqry"); // CJS

console.log(await UsageInfo(<host>, <apikey>, <identifier>))
```
Return usage info of your server:
```js
{
  current_state: 'running',
  is_suspended: false,
  resources: {
    memory_bytes: 1180884992,
    cpu_absolute: 20.679,
    disk_bytes: 449824735,
    network_rx_bytes: 453400,
    network_tx_bytes: 184979,
    uptime: 53932619
  }
}
```
You can also make it like this:
```js
pqry.usageInfo(<identifier>)
```
or this:
```js
var server = await pqry.getServer("1a2b3c4d")
server.usage()
```
#### GetBackups()
```
import { GetBackups } from "pqry"; // ESM and TS
const { GetBackups } = require("pqry"); // CJS

console.log(await GetBackups(<host>, <apikey>, <identifier>))
```
`identifier` - server's identifier  
Return all backups of your server:
```js
[
  {
    uuid: '46cbc7fa-36a8-4eb3-b664-362a69729804',
    is_successful: true,
    is_locked: true,
    name: 'My backup',
    ignored_files: [],
    checksum: 'sha1:115f6077497641a1bfdd881c1034226a13dc7c4f',
    bytes: 342782907,
    created_at: '2022-02-06T11:49:30+03:00',
    completed_at: '2022-02-06T11:49:38+03:00',
    host: 'https://link.to.panel.com',
    apikey: 'your api key'
  }
]
You can also make it like this:
```js
pqry.getBackups(<identifier>)
```
Note: All Backup request can be runned throught `Server` class:
```js
<Server>.getBackups()
```
#### GetBackup()
```
import { GetBackup } from "pqry"; // ESM and TS
const { GetBackup } = require("pqry"); // CJS

console.log(await GetBackup(<host>, <apikey>, <identifier>, <uuid>))
```
`identifier` - server's identifier  
`uuid` - uuid of backup  
Return backup of your server:
```js
{
  uuid: '46cbc7fa-36a8-4eb3-b664-362a69729804',
  is_successful: true,
  is_locked: true,
  name: 'My backup',
  ignored_files: [],
  checksum: 'sha1:115f6077497641a1bfdd881c1034226a13dc7c4f',
  bytes: 342782907,
  created_at: '2022-02-06T11:49:30+03:00',
  completed_at: '2022-02-06T11:49:38+03:00',
  host: 'https://link.to.panel.com',
  apikey: 'your api key'
}
```
You can also make it like this:
```js
pqry.getBackup(<identifier>, <uuid>)
```
#### CreateBackup()
```
import { CreateBackup } from "pqry"; // ESM and TS
const { CreateBackup } = require("pqry"); // CJS

console.log(await CreateBackup(<host>, <apikey>, <identifier>))
```
`identifier` - server's identifier  
`uuid` - uuid of backup  
Create and return backup of your server:
```js
{
  uuid: '46cbc7fa-36a8-4eb3-b664-362a69729804',
  is_successful: true,
  is_locked: true,
  name: 'My backup',
  ignored_files: [],
  checksum: 'sha1:115f6077497641a1bfdd881c1034226a13dc7c4f',
  bytes: 342782907,
  created_at: '2022-02-06T11:49:30+03:00',
  completed_at: '2022-02-06T11:49:38+03:00',
  host: 'https://link.to.panel.com',
  apikey: 'your api key'
}
```
You can also make it like this:
```js
pqry.createBackup(<identifier>)
```
#### DownloadBackup()
```
import { DownloadBackup } from "pqry"; // ESM and TS
const { DownloadBackup } = require("pqry"); // CJS

console.log(await DownloadBackup(<host>, <apikey>, <identifier>, <uuid>))
```
`identifier` - server's identifier  
`uuid` - uuid of backup  
Return backup's download link:
```js
https://mynode.com:8080/download/backup?token=123456
```
You can also make it like this:
```js
pqry.DownloadBackup(<identifier>, <uuid>)
```
#### DeleteBackup()
```js
import { DeleteBackup } from "pqry"; // ESM and TS
const { DeleteBackup } = require("pqry"); // CJS

console.log(await DeleteBackup(<host>, <apikey>, <identifier>, <uuid>))
```
`identifier` - server's identifier  
`uuid` - uuid of backup  
Delete backup, if it not locked.  
You can also make it like this:
```js
pqry.deleteBackup(<identifier>, <uuid>)
```
#### GetWebSocketCredintials
```js
import { GetWebSocketCredintials } from "pqry"; // ESM and TS
const { GetWebSocketCredintials } = require("pqry"); // CJS

console.log(await GetWebSocketCredintials(<host>, <apikey>, <identifier>))
```
`identifier` - server's identifier.  
Delete backup, if it not locked.  
You can also make it like this:
```js
pqry.getWebSocketCredintials(<identifier>)
```
Or
```js
const server = await pqry.getServer("1a2b3c4d");
console.log(server.getWebSocketCredintials())
```
Returns:
```js
{
  "token": "eyJ0eXAiOiJ...",
  "socket": "wss:\/\/pterodactyl.file.properties:8080\/api\/servers\/1a2b3c4d-259b-452e-8b4e-cecc464142ca\/ws"
}
```
That function is useless, because there's implementation WebSocket:
```js
import { ServerWebSocket } from "pqry";

let server = await pqry.getServer("1a2b3c4d")
let socket = new ServerWebSocket(server, <autoExtend>);
socket.on("log", (message) => {})
socket.on("close", (code, message) => {})
socket.on("error", (err) => {})
socket.on("socket_open", () => {})
socket.on("rawmessage", () => {})
socket.on("stats", (data) => {
  /*
  {
    "memory_bytes": 526626816,
    "memory_limit_bytes": 588800000,
    "cpu_absolute": 588.815,
    "network": {
        "rx_bytes": 1126,
        "tx_bytes": 1126
    },
    "state": "stopping",
    "disk_bytes": 128118626
}
  */
})
socket.on("token_expiring", () => {})
socket.on("token_expired", () => {})
socket.on("open", () => {})
socket.auth()

socket.requestStats()
socket.requestLogs()
socket.sendSignal("start") // kill stop restart start
socket.sendCommand("say Hello from pqry by WebSocket")

socket.socket.close() // to close WebSocket

```
`autoExtend` - Extend WebSocket connection on tocken expiring.  
Usefull only to use `log`, `stats`, and `open` listeners.  
Also you can create `ServerWebSocket` instance from `Server`:
```js
let server = await pqry.getServer("1a2b3c4d")
let socket = server.getWebSocket(true)
```
## Example

```js
import { PQRY } from "pqry";

const pqry = new PQRY({
  host: "https://link.to.panel.com",
  apikey: "your api key"
});

(async() => {
  var server = await pqry.getServer("1a2b3c4d");
  server.sendCommand("say §cRestart in 1 second!")
  setTimeout(() => {
    server.power.stop()
  }, 1000)
})();
```
