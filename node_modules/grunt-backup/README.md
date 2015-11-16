# grunt-backup

> Grunt plugin for making backups using TAR and GZip

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-backup --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-backup');
```

## The "backup" task

### Overview
In your project's Gruntfile, add a section named `backup` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  backup: {
    your_target: {
      src: '/path/to/directory',
      dest: 'path/to/backup.tgz'
    },
  },
})
```

### Options

#### src
Type: `String`

Required: `true`

Backup source path

#### dest
Type: `String`

Required: `true`

Backup destination path

#### compressionLevel
Type: `Number`

Required: `false`

Default: 5

Compression level from 0 to 9

### Usage Examples

```js
grunt.initConfig({
    backup: {
        downloads: {
            src: '/Users/igorzoriy/Downloads',
            dest: '/Users/igorzoriy/downloads.tgz',
            compressionLevel: 2
        },
        music: {
            src: '/Users/igorzoriy/Music',
            dest: '/Users/igorzoriy/music.tgz'
        },
    }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2013-11-22    v0.1.1    Add compressionLevel option, update readme
 * 2013-11-20    v0.1.0    Simple backup features.
