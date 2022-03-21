module.exports = function(eleventyConfig) {
  
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.addWatchTarget("./src/scss/");
  // https://www.11ty.dev/docs/copy/#passthrough-file-copy
  eleventyConfig.addPassthroughCopy("./src/css");
  
  eleventyConfig.setBrowserSyncConfig({
    files: "dist/css/**/*.css"
  });
  
  // https://www.11ty.dev/docs/config/
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};