module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-css-modules",
    "stylelint-config-recess-order"
  ],
  "plugins": ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
  "rules": {
    "at-rule-no-unknown": null,
    "max-nesting-depth": 5,
    "selector-max-compound-selectors": 5,
    "scss/at-rule-no-unknown": true,
    "order/properties-alphabetical-order": null,
    "selector-class-pattern": [
      "^[a-z0-9-]+(__[a-z0-9-]+)?(--[a-z0-9-]+)?$",
      { "message": "Must follow BEM rules." }
    ],
    "prettier/prettier": [
      true,
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "useTabs": false,
        "semi": false,
        "singleQuote": true,
        "bracketSpacing": true
      }
    ]
  }
}
