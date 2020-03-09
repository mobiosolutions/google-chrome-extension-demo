$(function(){
    var url = "https://favqs.com/api/qotd";
    var quote = $("#quoteblock");// the id of the heading
    $.get(url, function (data) {
        var the_quote = data;
        quote.text(the_quote.quote.body);
        var author = $("#author");// id of author
        author.text(the_quote.quote.author);
    });
});