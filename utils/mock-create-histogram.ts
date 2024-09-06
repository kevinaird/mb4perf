const originalPerfHooks = require('perf_hooks');

// Your custom implementation of createHistogram
function _customCreateHistogram(options: any) {
  // Implement your polyfill logic here
  return {
    // Mock or polyfill methods as needed
    record: (value: any) => console.log(`Recorded value: ${value}`),
    enable: () => {},
    percentile: () => {},
    reset: () => {},
  };
}


// Override the createHistogram function
originalPerfHooks.createHistogram = _customCreateHistogram;
originalPerfHooks.monitorEventLoopDelay = _customCreateHistogram;

// Replace the module in the require cache
// @ts-ignore
(require as NodeRequire).cache['perf_hooks'].exports = originalPerfHooks;