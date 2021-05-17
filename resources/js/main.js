$(document).ready(function(){

    //stiky manu

    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });








    // mixitup (portfolio)
    var mixer= mixitup('.container');
}) ;