import schema from './module';
import Server from './server';
import config from './config/configurations';

const server = new Server(config);

(() => {
  console.log("http://localhost:9001/graphql")
  server.bootstrap().setupApollo(schema);
})();
