require("prom-client");

const requireCache = Object.keys(require.cache);
requireCache
    .filter(n=>/prom-client/.test(n))
    .forEach(n=>{
        const m = n.replace('/prom-client/','/mountebank/node_modules/prom-client/');
        require.cache[m] = require.cache[n];
    });

console.log(Object.keys(require.cache).filter(n=>/prom-client/.test(n)));

require("mountebank/bin/mb");