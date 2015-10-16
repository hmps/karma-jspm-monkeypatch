Karma-JSPM mpnkeypatch
===

The latest update to [SystemJS (0.19.4)](https://github.com/systemjs/systemjs/tree/0.19.4) breaks [karma-jspm](https://github.com/Workiva/karma-jspm). See [issue #106](https://github.com/Workiva/karma-jspm/issues/106) in the karma-jspm repo for more information.

This package is a quick way to monkeypatch the bug, with the fix mentioned in the issue above.

## Deprecation notice
As soon as [issue #106](https://github.com/Workiva/karma-jspm/issues/106) is fixed, this package will be deprecated. Use it with caution.

## Installation
Clone this repo and then link it using `npm link`.

## Usage
`[project-dir/] $ karma-jspm-monkeypatch [--prepend]`

### Options

- prepend: Path to prepend the `node_modules` directory with. Useful if karma-jspm is installed as a submodule. Path should be given without starting or ending slash.
