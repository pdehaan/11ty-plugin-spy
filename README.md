# 11ty-plugin-spy

New plugin, who dis?

Inspects Eleventy plugins and tries [its best] to figure out which filters/shortcodes/tags the plugin adds.

## WHY?

Why not?

## INSTALLATION

```sh
npm i pdehaan/11ty-plugin-spy -D
```

## USAGE

```js
const Spy = require("11ty-plugin-spy");

const plugin = new Spy(require("@11ty/eleventy-plugin-rss"));
console.log(JSON.stringify(plugin, null, 2));
```

### OUTPUT

```sh
node index
{
  "_versionCheck": ">=0.11",
  "nunjucksFilters": [
    "absoluteUrl",
    "getNewestCollectionItemDate",
    "dateToRfc3339",
    "rssLastUpdatedDate",
    "rssDate"
  ],
  "nunjucksAsyncFilters": [
    "htmlToAbsoluteUrls"
  ]
}
```
