# npm-cli-path-cli

[![NPM version](https://img.shields.io/npm/v/npm-cli-path-cli.svg)](https://www.npmjs.com/package/npm-cli-path-cli)
[![Build Status](https://travis-ci.org/shinnn/npm-cli-path-cli.svg?branch=master)](https://travis-ci.org/shinnn/npm-cli-path-cli)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/npm-cli-path-cli.svg)](https://coveralls.io/github/shinnn/npm-cli-path-cli?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/npm-cli-path-cli.svg)](https://david-dm.org/shinnn/npm-cli-path-cli)
[![devDependency Status](https://david-dm.org/shinnn/npm-cli-path-cli/dev-status.svg)](https://david-dm.org/shinnn/npm-cli-path-cli#info=devDependencies)

Resolve the path of [`npm-cli.js`](https://github.com/npm/npm/blob/master/bin/npm-cli.js) included in the globally installed [npm](https://www.npmjs.com/) CLI 

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install --global npm-cli-path-cli
```

## Usage

```
npm-cli-path [(--help|-h|--version|-v)]

Flags:
--help,    -h: Print usage information
--version, -v: Print version

Example:
$ npm-cli-path
> /usr/local/lib/node_modules/npm/bin/npm-cli.js
```

## Related project

* [npm-cli-path](https://github.com/shinnn/npm-cli-path) - API for this module

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
