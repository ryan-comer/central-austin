import createScenarios_path from './path';

export default function (server) {
  // Create Pathways paths
  createScenarios_path(server);
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('member', 30);
}
