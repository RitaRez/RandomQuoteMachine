generate();
function generate(){
    console.log("thats something");
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
        type: 'post',
        data: {

        },
        headers: {
            'X-Mashape-Key': 'A4ja2vYngpmshPaU4uRhlkRKgqhhp1BnNOTjsnZNBt761fRUzr'
        },
        dataType: 'json',
        success: function(data) {
            //$('body').fadeIn(50);
            document.getElementById('quoteText').innerHTML = (data.quote);
            document.getElementById('author').innerHTML = (data.author);

            //$('.real-quote>span>p').text('"' + data.quote + '"');
            //$('.author>span').text(data.author);
            //$('.author>small').text("Category: " + data.category);
            //$('#twitter').attr("href","https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"' + data.quote + '"' + " - " + data.author +"&tw_p=tweetbutton&url=http%3A%2F%2Fcodepen.io%2Fgexo%2Fpen%2FvOPxdg" );
        }
    });
}
