(function () {
    'use strict';

    $.getJSON('https://allorigins.me/get?url=' + encodeURIComponent('https://untappd.com/user/HoppedUpEast/beers?sort=highest_rated_you') + '&callback=?', function(data){
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

        $.each( sixpack, function( index, value ){
            $(".beers").append(
                "<div>" + 
                "<h3>" + value.name + "</h3>" + 
                "<ul>" + 
                "<li>" + value.brewery + "</li>" + 
                "<li>" + value.style + "</li>" + 
                "<li>" + value.abv + "</li>" + 
                "<li>" + value.ibu + "</li>" + 
                "</ul>" +
                "</div>"
            );
        });

    });

    

    function parseBeerValue(beer, value){
        var value = $(beer).find('p.' + value);
        value = $("<div/>").html(value).text();
        return value;
    }

}());
