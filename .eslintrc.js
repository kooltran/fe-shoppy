module.exports = {
  //need babel-eslint to allow class static props
  "parser": "babel-eslint",
  "extends": [ "eslint:recommended", "plugin:react/recommended" ],
  "plugins": [ "react" ],
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
  },
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "rules": {
     "no-console": 0,
  }
};
