module.exports = {
    php: {
        files: [
            {
                src: 'vendor/composer/ClassLoader.php',
                dest: 'src/<% namespaces.thirdParty %>/Composer/Autoload/ClassLoader.php'
            },
            {
                expand: true,
                cwd: 'vendor/pimple/pimple/src/Pimple',
                src: ['**', '!**/Tests/**'],
                dest: 'src/<% namespaces.thirdParty %>/Pimple'
            },
            {
                expand: true,
                cwd: 'vendor/psr/container/src',
                src: '**',
                dest: 'src/<% namespaces.thirdParty %>/Psr/Container'
            },
            {
                expand: true,
                cwd: 'vendor/wp-hibou/di/src',
                src: '**',
                dest: 'src/<% namespaces.thirdParty %>/WPHibou/DI'
            }
        ]
    }
};
