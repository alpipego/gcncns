module.exports = {
    php: {
        files: [
            {
                src: 'vendor/composer/ClassLoader.php',
                dest: 'src/<% namespaces.thirdParty %>/Composer/Autoload/ClassLoader.php'
            }
        ]
    }
};
