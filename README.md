(deprecated: This repository is old. Please see [api-blueprint-template](https://github.com/zaki-yama/api-blueprint-template))

API Documentation Tool with aglio
=================================

An API Documentation tool sample generated by [aglio](https://github.com/danielgtaylor/aglio)

## Stack

Currently using these tools to generate API document:

- [aglio](https://github.com/danielgtaylor/aglio)
- [gulp-aglio](https://www.npmjs.com/package/gulp-aglio)
- [api-mock](https://github.com/localmed/api-mock)
- TODO: [dredd](https://github.com/apiaryio/dredd)

## Installation

```
$ npm install -g gulp
$ npm install
```

## Usage

### Basic Usage

Run

```
$ gulp
```

Then it generates api docs, runs local server at http://localhost:8080 , and watches file changes in `apidocs`.

### Run mock server

With [api-mock](https://github.com/localmed/api-mock).

```
$ npm install -g api-mock
$ api-mock public/index.md
```

## Demo

You can see published document [HERE](https://htmlpreview.github.io/?https://github.com/zaki-yama/aglio-sample/blob/master/published/index.html)

## Reference(Japanese)

[APIドキュメント作成ツールならApiary.ioよりaglioの方が良かった - dackdive's blog](http://dackdive.hateblo.jp/entry/2015/08/07/181723)
