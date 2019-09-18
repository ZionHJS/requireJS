define(['jquery', 'angular', 'methods'],function($, methods){
    $('#clickMe').click(function(){
        methods.changeHTML('I was clicked!');
    })
});




