module.exports = {
    php: {
        files: [{
            expand: true,
            cwd: 'src/<%= namespaces.thirdParty %>',
            src: ['**/*.php'],
            dest: 'src/<%= namespaces.thirdParty %>',
            filter: 'isFile'
        }],
            options: {
            replacements: [
                {
                    pattern: /namespace\s+?([^;]+);/,
                    replacement: 'namespace <%= namespaces.vendor %>\\<%= namespaces.thirdParty %>\\$1;'
                },
                {
                    pattern: /use\s+?([^;]+)(?=\\)([^;]+);/g,
                    replacement: 'use <%= namespaces.vendor %>\\<%= namespaces.thirdParty %>\\$1$2;'
                }
            ]
        }
    }
};
