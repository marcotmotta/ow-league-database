$(document).ready(function() {

    //$(".queries-container").css("display", "block");

    $(".menu-queries").on('click', function(){
        let url = 'https://0.0.0.0:5000.com/query/select%20*%20from%20players%20limit%205';
        /* $.ajax({
            url: url,
            type: 'GET',
            //data: ,
            //dataType: ,
            success: function(result){
                console.log(result);
                $(".body-container").append(JSON.stringify(result));
            },
            error: function(error){
                console.log('error', error);
            }
        }); */
        $("body").css("background-color", "lightgreen");
    });

    $(".menu-queries-own").on('click', function(){
        $("body").css("background-color", "lightblue");
    });

});