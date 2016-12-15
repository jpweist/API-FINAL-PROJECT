$(document).ready(function(){








  $.getJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-12-01&end_date=2016-12-06&api_key=RFoksCE2gfkBriopYyQFv1pnAwaJSMxMI6nuwG5B ',function(data) {


        let first25Photos = data.photos.slice(0,25;
        for (let i = 0; i < randomRange25; i++){
          let val = first25Photos[i];

          let $img = $('<img class="col-md-4 col-lg-3 col-xl-1" src='+val.img_src+ '></img>');
          $('.urlMarsAPI-1-1').append($img);
  }






}); // end of all
