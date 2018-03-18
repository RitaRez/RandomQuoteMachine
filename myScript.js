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
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var color = Math.floor(Math.random() * colors.length);
    document.getElementById("tumblr").style.backgroundColor = colors[color];
    document.getElementById("twitter").style.backgroundColor = colors[color];
    document.getElementById("new").style.backgroundColor = colors[color];
    document.getElementById("author").style.color = colors[color];
    document.getElementById("quoteBox").style.color = colors[color];
    document.getElementById("title").style.color = colors[color];
    document.body.style.backgroundColor = colors[color];


}

function shareTwitter(){
            window.open("https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"'
            + document.getElementById('quoteText').innerHTML  + '"' + " - "
            + document.getElementById('author').innerHTML);
}

function shareTumblr(){
            window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='
            +document.getElementById('author').innerHTML +'&content='
            + document.getElementById('quoteText').innerHTML +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
}
