class Spy {
  constructor(pluginFn) {
    if (pluginFn.configFunction) {
      pluginFn.configFunction(this);
    } else {
      pluginFn(this);
    }
  }

  $safePush(key = "", value = "") {
    if (!this[key]) this[key] = [];
    this[key].push(value);
  }

  versionCheck(v) {
    this._versionCheck = v;
  }
  on(name) {
    this.$safePush("events", name);
  }
  addFilter(name) {
    this.$safePush("filters", name);
  }
  addJavaScriptFunction(name) {
    this.$safePush("javascriptFunctions", name);
  }
  addLiquidShortcode(name) {
    this.$safePush("liquidShortcodes", name);
  }
  addLiquidTag(name) {
    this.$safePush("liquidTags", name);
  }
  addNunjucksFilter(name) {
    this.$safePush("nunjucksFilters", name);
  }
  addNunjucksAsyncFilter(name) {
    this.$safePush("nunjucksAsyncFilters", name);
  }
  addNunjucksTag(name) {
    this.$safePush("nunjucksTags", name);
  }
  addNunjucksAsyncShortcode(name) {
    this.$safePush("nunjucksAsyncShortcodes", name);
  }
  addPairedNunjucksShortcode(name) {
    this.$safePush("pairedNunjucksShortcodes", name);
  }
  addMarkdownHighlighter(name) {
    // ignore
    // this.$safePush("markdownHighlighter", true);
  }
  addLinter(name) {
    this.$safePush("linters", name);
  }
}

module.exports = Spy;
