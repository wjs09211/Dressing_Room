$(function (){

        
    function format_float(num, pos)
    {
        var size = Math.pow(10, pos);
        return Math.round(num * size) / size;
    }
 
    function preview(input) {
 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                console.log(e);
                x = e.target.result
                $('.peopleImage').attr('src', e.target.result);
                var KB = format_float(e.total / 1024, 2);
            }
 
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    
//    var box_content = '<div class="box"><div class="imageRange"><center><img class="peopleImage"></center></div><img class="addressImage" src="img/七分袖西裝外套$500.png"></div>';
//    for( var i = 0 ; i < 3 ; i++){
//        $("#wrapper").append(box_content);
//    }
    
    $("body").on("change", "#loadImage", function (){
        preview(this);
    });

    $(".imageClothes").draggable({
        containment: "parent",
        start: function () {
        },
        drag: function (event, ui) {
            var p = ui.position;
            $(".imageClothes").css({ top: p.top, left: p.left});
        },
        stop: function () {
        }
    });
    
    $("body").on("change", "#imageWidth", function (){
        var size = $('#imageWidth').val();
        var dressWidth = 500*size/100;
        var paintWidth = 300*size/100;
        sliderW.slider( "value", size );
        $(".imageDress").css({ width: dressWidth});
        $(".imagePant").css({ width: paintWidth});
        $(".imagePant").css({ left: (dressWidth - paintWidth)/2});
        $(".imageClothes").css({ width: dressWidth});
    });
    
    $("body").on("change", "#imageHeight", function (){
        var size = $('#imageHeight').val();
        var dressHeight = 600*size/100;
        var paintHeight = 600*size/100;
        sliderH.slider( "value", size );
        $(".imageDress").css({ height: dressHeight});
        $(".imagePant").css({ height: paintHeight});
    });
    
    
});