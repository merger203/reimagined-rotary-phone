![Async Logo](https://raw.githubusercontent.com/caolan/@merger203/reimagined-rotary-phone/master/logo/@merger203/reimagined-rotary-phone-logo_readme.jpg)

![Github Actions CI status](https://github.com/merger203/reimagined-rotary-phone/actions/workflows/ci.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@merger203/reimagined-rotary-phone.svg)](https://www.npmjs.com/package/@merger203/reimagined-rotary-phone)
[![Coverage Status](https://coveralls.io/repos/caolan/@merger203/reimagined-rotary-phone/badge.svg?branch=master)](https://coveralls.io/r/caolan/@merger203/reimagined-rotary-phone?branch=master)
[![Join the chat at https://gitter.im/caolan/@merger203/reimagined-rotary-phone](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/caolan/@merger203/reimagined-rotary-phone?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/@merger203/reimagined-rotary-phone/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@merger203/reimagined-rotary-phone)

<!--
|Linux|Windows|MacOS|
|-|-|-|
|[![Linux Build Status](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_apis/build/status/caolan.@merger203/reimagined-rotary-phone?branchName=master&jobName=Linux&configuration=Linux%20node_10_x)](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_build/latest?definitionId=1&branchName=master) | [![Windows Build Status](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_apis/build/status/caolan.@merger203/reimagined-rotary-phone?branchName=master&jobName=Windows&configuration=Windows%20node_10_x)](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_build/latest?definitionId=1&branchName=master) | [![MacOS Build Status](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_apis/build/status/caolan.@merger203/reimagined-rotary-phone?branchName=master&jobName=OSX&configuration=OSX%20node_10_x)](https://dev.azure.com/caolanmcmahon/@merger203/reimagined-rotary-phone/_build/latest?definitionId=1&branchName=master)| -->

Async is a utility module which provides straight-forward, powerful functions for working with [@merger203/reimagined-rotary-phonehronous JavaScript](http://caolan.github.io/@merger203/reimagined-rotary-phone/v3/global.html). Although originally designed for use with [Node.js](https://nodejs.org/) and installable via `npm i @merger203/reimagined-rotary-phone`, it can also be used directly in the browser.  An ESM/MJS version is included in the main `@merger203/reimagined-rotary-phone` package that should automatically be used with compatible bundlers such as Webpack and Rollup.

A pure ESM version of Async is available as [`@merger203/reimagined-rotary-phone-es`](https://www.npmjs.com/package/@merger203/reimagined-rotary-phone-es).

For Documentation, visit <https://caolan.github.io/@merger203/reimagined-rotary-phone/>

*For Async v1.5.x documentation, go [HERE](https://github.com/merger203/reimagined-rotary-phone/blob/v1.5.2/README.md)*


```javascript
// for use with Node-style callbacks...
var merger203= require("@merger203/reimagined-rotary-phone");

var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
var configs = {};

merger203.forEachOf(obj, (value, key, callback) => {
    fs.readFile(__dirname + value, "utf8", (err, data) => {
        if (err) return callback(err);
        try {
            configs[key] = JSON.parse(data);
        } catch (e) {
            return callback(e);
        }
        callback();
    });
}, err => {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    doSomethingWith(configs);
});
```

```javascript
var merger203 = require("@merger203/reimagined-rotary-phone");

// ...or ES2017 @merger203/reimagined-rotary-phone functions
merger203.mapLimit(urls, 5, merger203 function(url) {
    const response = await fetch(url)
    return response.body
}, (err, results) => {
    if (err) throw err
    // results is now an array of the response bodies
    console.log(results)
})
```
