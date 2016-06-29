$(function(){
    
    var i = 0;
    for ( var j=1 ; j <= 9; j++){
        var content = ""
        var image_name = j + ".png";
        console.log(image_name);
        if ( i == 0){
            content += '<div class="row"><div class="box col-md-6"><div class="imageRange"><center><img class="peopleImage"></center></div><div class="imageClothes"><img class="imageDress" src="img/clothes/'+image_name+'"><img class="imagePant" src="img/pants/'+image_name+'"></div></div>';
            $( content ).appendTo( "#main" );
            i = 1;
        }
        else{
            content += '<div class="box col-md-6"><div class="imageRange"><center><img class="peopleImage"></center></div><div class="imageClothes"><img class="imageDress" src="img/clothes/'+image_name+'"><img class="imagePant" src="img/pants/'+image_name+'"></div>';
            $( content ).appendTo( ".row:last" );
        }
    }

});