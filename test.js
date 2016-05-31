import path from 'path';

import execa from 'execa';
import npmCliPath from 'npm-cli-path';
import objectValues from 'object-values';
import test from 'ava';

// https://github.com/eslint/eslint/issues/6266
import {bin, version} from './package.json'; // eslint-disable-line

const binPath = path.resolve(objectValues(bin)[0]);

test('print npm CLI path', async t => {
  const out = await execa.stdout(binPath);
  t.is(out, await npmCliPath());
});

test('print usage information with --help flag', async t => {
  const out = await execa.stdout(binPath, ['--help']);
  t.regex(out, /Usage:/);
});

test('print usage information with --h flag', async t => {
  const out = await execa.stdout(binPath, ['-h']);
  t.regex(out, /Usage:/);
});

test('print usage information with --version flag', async t => {
  const out = await execa.stdout(binPath, ['--version']);
  t.is(out, version);
});

test('print usage information with -v flag', async t => {
  const out = await execa.stdout(binPath, ['-v']);
  t.is(out, version);
});

test('disallow too many arguments', async t => {
  const err = await execa(binPath, ['-v', '-h']).catch(({stderr}) => stderr);
  t.is(err, 'Too many arguments: -v, -h\n');
});

test('disallow unknown arguments', async t => {
  const err = await execa(binPath, ['--foo']).catch(({stderr}) => stderr);
  t.is(err, 'Unknown argument: --foo\n');
});
