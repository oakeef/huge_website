(function () {
    'use strict';

    $.getJSON('http://anyorigin.com/go?url=https%3A//untappd.com/user/HoppedUpEast/beers%3Fsort%3Dhighest_rated_you&callback=?', function(data){
        // $('#output').html(data.contents);
        var response = data.contents;
        var beeritems = $(response).find("div.beer-item");
        var sixpack = [];
        

        $.each( beeritems, function( index, value ){

            if(index <= 5){

                sixpack.push({
                    name: parseBeerValue(value, "name"),
                    brewery: parseBeerValue(value, "brewery"),
                    style: parseBeerValue(value, "style"),
                    abv: parseBeerValue(value, "abv"),
                    ibu: parseBeerValue(value, "ibu"),
                });

            }else{
                return;
            }
   
        });

    });

    function parseBeerValue(beer, value){
        var value = $(beer).find('p.' + value);
        value = $("<div/>").html(value).text();
        return value;
    }

}());
