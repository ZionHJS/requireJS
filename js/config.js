//this is the config js
requirejs.config({
    baseUrl:'js', 
    paths:{
        gulpfile:'gulpfile',
        rem:'rem',
        jquery:['jQuery-3.4-1'],
        zepto:'zepto',
        angular:['https://cdn.bootcss.com/angular.js/2.0.0-beta.17/angular2-all.umd.min.js'],
        methods: 'customScripts/methods'
    }
});
