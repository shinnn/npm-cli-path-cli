#!/usr/bin/env node
'use strict';

const arrayDiffer = require('array-differ');
const pkgBin = require('pkg-bin');
const {red, yellow} = require('chalk');
const sumUpBin = require('sum-up-bin');

const argv = process.argv.slice(2);
const pkg = require('./package.json');

const help = `${sumUpBin(pkg)}

Usage:
${pkgBin(pkg)} [(--help|-h|--version|-v)]

Flags:
${yellow('--help,    -h')}: Print usage information
${yellow('--version, -v')}: Print version

Example:
$ npm-cli-path
> /usr/local/lib/node_modules/npm/bin/npm-cli.js
`;

if (argv.length > 1) {
  console.error(red(`Too many arguments: ${argv.join(', ')}`));
  process.exit(1);
}

const unknownArgs = arrayDiffer(argv, ['--help', '-h', '--version', '-v']);

if (unknownArgs.length !== 0) {
  console.error(red(`Unknown argument: ${unknownArgs.join(', ')}`));
  process.exit(1);
}

if (argv.includes('--help') || argv.includes('-h')) {
  console.log(help);
} else if (argv.includes('--version') || argv.includes('-v')) {
  console.log(pkg.version);
} else {
  require('loud-rejection/register');
  require('npm-cli-path')().then(console.log);
}
