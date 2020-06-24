[![CircleCI](https://img.shields.io/circleci/build/github/dzaman/node-skeleton)](https://circleci.com/gh/dzaman/node-skeleton) [![codecov](https://img.shields.io/codecov/c/github/dzaman/node-skeleton)](https://codecov.io/gh/dzaman/node-skeleton)

# Features

- [TypeScript](https://www.typescriptlang.org/)
- Tests with [Jest](https://jestjs.io/)
- Linting with [ESLint](https://eslint.org/)
- Lint rules from [Airbnb](https://github.com/airbnb/javascript) via [this package](https://github.com/iamturns/eslint-config-airbnb-typescript)
- Continuous Integration with [CircleCI](https://circleci.com/gh/dzaman/node-skeleton)
- Code coverage with Jest shared to [Codecov](https://codecov.io/gh/dzaman/node-skeleton)
- Documentation generation with [TypeDoc](https://typedoc.org/)
- Documentation publishing with [GH Pages](https://pages.github.com/)
- Commits with [Commitizen](https://github.com/commitizen/cz-cli)
- Releases with [Semantic Release](https://github.com/semantic-release/semantic-release)

# Commands

## build

`node_modules/.bin/tsc -p .`

## build+test

`npm run build && npm run test-build`

## build+test+coverage

`npm run build+test -- -- --collect-coverage`

## commit
`npx git-cz"`

## coverage-post
`node_modules/.bin/codecov`

## docs

`node_modules/.bin/typedoc --out docs --module commonjs lib`

## docs-publish

`node_modules/.bin/gh-pages --dist docs`

## lint

`node_modules/.bin/eslint lib tests --ext .js,.jsx,.ts,.tsx`

## test

`node_modules/.bin/jest`

## test-build

`x"npm test -- -c jest.config.build.js`

## test+coverage

`node_modules/.bin/jest --collect-coverage`
