module.exports = {
    multipass: true,     // Multiple optimization passes
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,  // Keep viewBox for responsiveness
            cleanupIDs: false      // Avoid breaking JS/CSS references
          }
        }
      },
      'removeDimensions', // Replace width/height with viewBox
      'sortAttrs',       // Alphabetize attributes for better compression
      'removeStyleElement', // Remove embedded CSS (move to external files)
      'removeScriptElement' // Remove embedded JS (security + size)
    ]
  };