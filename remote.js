import { TizenRemote, Keys } from '@headspinio/tizen-remote';

const remote = new TizenRemote({
  host: '172.31.42.205',
  port: 26101,
  token: '16085789',
  appId: 'org.tizen.example.MovieLibrary'
});

await remote.connect();
await remote.click(Keys.LEFT);
await remote.longPress(Keys.ENTER);
await remote.disconnect();s