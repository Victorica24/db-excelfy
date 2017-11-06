// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "parser": "postcss-html", // required for vue templates <style></style> tag
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    //"autoprefixer": {}
    "postcss-import": {},
    "postcss-cssnext": {},
    "postcss-nested": {}
  }
}
