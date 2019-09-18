//this is the config js
requirejs.config({
    baseUrl:'js', 
    paths:{
        gulpfile:'gulpfile.js',
        rem:'rem.js',
        jquery:['jQuery-3.4-1.js'],
        zepto:'zepto.js',
        angular:['https://cdn.bootcss.com/angular.js/2.0.0-beta.17/angular2-all.umd.min.js']
    }
});
