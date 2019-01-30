import createScenarios_path from './path';

export default function(server) {
    // Create members
    server.createList('member', 30);

    // Create Pathways paths
    createScenarios_path(server);
}