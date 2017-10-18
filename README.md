# GCNCNS - WP Plugin Boiler Plate
WP Plugin Boilerplate for building plugins with composer and keeping third-party dependencies in repository

## Yet another plugin boilerplate?
Yes! This one aims at preventing conflicts caused by third-party libraries by renaming their namespaces.
Compared to other boilerplates out there this one does not provide you with WordPress-specific tools or reusable code. 

## GCNCNS??
Grunt Composer No Conflict Namespaces

## How to use
### Getting things ready
1. Create a new plugin by running `composer create-project alpipego/gcnsnc ./PLUGIN_NAME`.

1. You can then update the `composer.json` file with your plugin details (or remove it altogether).

1. Install node packages by running `npm install` (or yarn or whatever you want to use).

### Settings
Update `Gruntfile.js` with your plugins namespace, i.e. replace `MyNamespace\\MySubNamespace` with your namespace (and subnamespace). By default all third-party code will be copied to `src/Common` and the namespace will be prefixed with the values in the `namespaces` object.

```
namespace GuzzleHttp;
``` 

will be replaced with 

```
namespace MyNamespace\MySubNamespace\Common\GuzzleHttp;
```

### Adding Packages
Besides adding your required packages to composer, you will also need to add them to the task in `grunt/copy.js`. (Note the usage of the `namespaces.thirdParty` variable).

The simplest form is a JavaScript object with `src` and `dest` properties:

```
{
    src: 'vendor/composer/ClassLoader.php',
    dest: 'src/<% namespaces.thirdParty %>/Composer/Autoload/ClassLoader.php'
}
``` 

This will copy a single `.php` file to the src directory. Copying all contents from a directory is as simple:

```
{
    expand: true,
    cwd: 'vendor/psr/container/src',
    src: '**',
    dest: 'src/<% namespaces.thirdParty %>/Psr/Container'
}
```

If you want to copy some files but not others this can be achieved as well:

```
{
    expand: true,
    cwd: 'vendor/pimple/pimple/src/Pimple',
    src: ['**', '!**/Tests/**'],
    dest: 'src/<% namespaces.thirdParty %>/Pimple'
}
```

[Read more about grunt globbing here.](https://gruntjs.com/configuring-tasks#building-the-files-object-dynamically)

### Autoloading packages
Instead of including composers `autoload.php` use the `ClassLoader` class it provides. Add this at the top of your plugin (or in a bootstrap file):

```
use MyNamespace\MySubNamespace\Common\Composer\Autoload\ClassLoader;

require_once __DIR__ . '/src/Common/Composer/Autoload/ClassLoader.php';

$loader = new ClassLoader();
$loader->setPsr4('MyNamespace\\MySubNamespace\\', realpath(__DIR__ . '/src/'));
$loader->register();

```

You will have to change the namespace and directories to fit your setup, find the documentation for the [`ClassLoader` here](https://getcomposer.org/apidoc/1.3.0/Composer/Autoload/ClassLoader.html).
