// 1. Loading a more recent version of prom-client and updating the require cache to force
//    mountebank to use the latest version which includes fixes for bun.
require("prom-client");

const requireCache = Object.keys(require.cache);
requireCache
    .filter(n=>/prom-client/.test(n))
    .forEach(n=>{
        const m = n.replace('/prom-client/','/mountebank/node_modules/prom-client/');
        require.cache[m] = require.cache[n];
    });

// 2. Run mb!
require("mountebank/bin/mb");