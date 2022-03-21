module.exports = function(eleventyConfig) {
  
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.addWatchTarget("./src/scss/");
  // https://www.11ty.dev/docs/copy/#passthrough-file-copy
  eleventyConfig.addPassthroughCopy("./src/css");
  
  eleventyConfig.setBrowserSyncConfig({
    files: "dist/css/**/*.css"
  });
  
  // https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });
  
  // https://www.11ty.dev/docs/config/
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};