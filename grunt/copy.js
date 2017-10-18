module.exports = {
    php: {
        files: [
            {
                src: 'vendor/composer/ClassLoader.php',
                dest: 'src/<% dir.thirdParty %>/Composer/Autoload/ClassLoader.php'
            }
        ]
    }
};
