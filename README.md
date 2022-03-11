# pqry
Easier query to pterodactyl v1 panel.
## Installing

Coming soon...

## Usage

1. Get apikey from your panel
2. Import PQRY:

```js
import { PQRY } from "pqry";
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
< > - required
[ ] - optional
#### GetServers()
```js
import { GetServers } from "pqry";

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
import { GetApiKeys } from "pqry";

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
import { CreateApiKey } from "pqry";

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
import { DeleteApiKey } from "pqry";

console.log(await DeleteApiKey(<host>, <apikey>, <identifier>))
```
Return:
```js
undefined
```
You can also make it like this:
```js
pqry.deleteApiKey(<description>, [allowed_ips])
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
    server.power.stop
  }, 1000)
})();
```
