var sliderW;
var sliderH;
$(function() {
    sliderW = $( "#sliderWidth" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#imageWidth" ).val( ui.value );
        var size = ui.value;
        var dressWidth = 500*size/100;
        var paintWidth = 300*size/100;
        $(".imageDress").css({ width: dressWidth});
        $(".imagePant").css({ width: paintWidth});
        $(".imagePant").css({ left: (dressWidth - paintWidth)/2});
        $(".imageClothes").css({ width: dressWidth});
      }
    });
});

$(function() {
    sliderH = $( "#sliderHeight" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#imageHeight" ).val( ui.value );
        var size = ui.value;
        var dressHeight = 600*size/100;
        var paintHeight = 600*size/100;
        $(".imageDress").css({ height: dressHeight});
        $(".imagePant").css({ height: paintHeight});
        $(".imageClothes").css({ height: dressHeight+paintHeight});
      }
    });
});