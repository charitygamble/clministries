module.exports = config => {
  config.addPassthroughCopy('src/_includes/assets')
    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      
      dir: {
        input: 'src',
        output: 'dist'
      }
    };
};