import createScenarios_path from './path';

export default function(server) {
    // Create Pathways paths
    createScenarios_path(server);

    // Create members
    server.createList('member', 30);
}