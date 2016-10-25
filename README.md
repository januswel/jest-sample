jest-sample
===========

```sh
yarn
npm test
```

to update snapshot

```sh
npm test -- -u
```

setup
-----

```sh
yarn -g react-native-cli
react-native init jest-sample
cd jest-sample
rm -rf node_modules
yarn
yarn add jest jest-react-native react-test-renderer babel-jest babel-preset-react-native --dev
```

```json:package.json
{
  "name": "jest",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "15.3.2",
    "react-native": "^0.35.0"
  },
  "jest": {
    "preset": "jest-react-native",
    "testEnvironment": "node"
  },
  "devDependencies": {
    "babel-jest": "^16.0.0",
    "babel-preset-react-native": "^1.9.0",
    "jest": "^16.0.1",
    "jest-react-native": "^16.0.0",
    "react-test-renderer": "^15.3.2"
  }
}
```

```conf:.babelrc
{
  "presets": ["react-native"]
}
```
