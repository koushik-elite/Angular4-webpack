const path = require('path');

module.exports =  {
  plugins: [
    require('import-postcss')(),
    require('postcss-assets')({
      baseUrl: '/sites/g/files/g2000006551/themes/site/sandbox',
      //baseUrl: '/sites/g/files/g2000006551/themes/site/sandbox/staging',
      loadPaths: [path.join(process.cwd(), "assets/i")],
    }),
    require('postcss-pseudoelements')(),
    require('postcss-mixins')(),
    require('postcss-simple-vars')(),
    require('postcss-extend')(),
    require('postcss-apply')(),
    require('postcss-cssnext')(),
    require('postcss-responsive-type')(),
    require('postcss-nested')(),
  ]
};
/*
module.exports = {
  plugins: {
    'postcss-smart-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    
    'postcss-pseudoelements':{},
    'postcss-cssnext': {},
    'postcss-apply': {},
    'postcss-responsive-type': {}
  }
}*/