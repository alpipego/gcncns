module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            namespaces: {
                thirdParty: 'Common',
                vendor: 'MyNamespace\\MySubNamespace'
            }
        }
    });
};
