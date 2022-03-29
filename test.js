const Spy = require("./index");

const plugins = {
  "@11ty/eleventy-plugin-rss": require("@11ty/eleventy-plugin-rss")
};

const data = Object.entries(plugins).reduce((acc={}, [name, plugin]) => {
  const spy = new Spy(plugin);
  acc[name] = { _name: name, ...spy };
  return acc;
}, {});

console.log(JSON.stringify(data, null, 2));
