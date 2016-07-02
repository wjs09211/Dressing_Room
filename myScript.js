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
        },
        cancel: ".coor"
    });
    
    $( ".imageClothes" ).resizable({
        alsoResize: ".imageClothes",
        maxHeight: 800,
        maxWidth: 600,
        minHeight: 50,
        minWidth: 50

    });
    
    
    
});