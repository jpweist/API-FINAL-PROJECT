$(document).ready(function(){


  var randomYear = Math.floor((Math.random() * 11) + 2006);
    var randomMonth = Math.floor((Math.random() * 12) + 1);
    var randomDay = 0;
    if( randomMonth === 4 || randomMonth === 6 || randomMonth === 9 || randomMonth === 11){
      randomDay = Math.floor((Math.random() * 30) + 1);
    }
    else if(randomMonth === 2 ){
      randomDay = Math.floor((Math.random() * 28) + 1);

    }
    else{
      randomDay = Math.floor((Math.random() * 31) + 1);

    }
    // console.log("randomYear " + randomYear + "randomMonth " + randomMonth + "randomDay " + randomDay);
    var newDate = "&date=" + randomYear + "-" + randomMonth + "-" + randomDay;
  // newDate = "&date=2016-10-10"; // HERE FOR RANDOM OR DATE *******************


// https://api.nasa.gov/EPIC/api/v1.0/images.php?date=2015-10-31&api_key=RFoksCE2gfkBriopYyQFv1pnAwaJSMxMI6nuwG5B //  NASA EPOD

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=solMarsDay&api_key=RFoksCE2gfkBriopYyQFv1pnAwaJSMxMI6nuwG5B // NASA mars
  // $('.urlMarsAPI-1-1').matchHeight();
var solMarsDay = 200;
$.getJSON(' https://api.nasa.gov/EPIC/api/v1.0/images.php?date=2015-10-31&api_key=RFoksCE2gfkBriopYyQFv1pnAwaJSMxMI6nuwG5B ',function(data) {
      var randomImageMars = Math.ceil(Math.random() * 1000);
      var randomRange25 = Math.ceil(Math.random() * 25);

      let first25Photos = data.photos.slice(0,50);
      for (let i = 0; i < randomRange25; i++){
        let val = first25Photos[i];

        let $img = $('<div class="col-md-4 col-lg-3 col-xl-1 imageSizing "><img class="imageSmall" src='+val.img_src+ '></img><div>');
        $('.urlMarsAPI-1-1').append($img);
}

          //  $('.date').text(data.photos[randomImageMars].date)
          //  $('.copyright').text("Cloud Score" + data.photos[randomImageMars].cloud_score)
          //  $('.id').text(data.photos[randomImageMars].id)
          //  $('#explanation').text(data.explanation)4
          // console.log(first25Photos)
          // console.log(randomImageMars)


  });

  // calling event but changes images on page to fewer
$(window).resize(function(){
  console.log("Resize was called");
  var marsImageHight = $(".imageSizing").height(marsImageHight);
  console.log(marsImageHight)

});

}); // end of all
