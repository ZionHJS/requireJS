define(['jquery', 'methods'],function($, methods){  //denpends on jqueyr and methods
    $('#clickMe').click(function(){
        methods.changeHTML('I was clicked!');
    })
});




