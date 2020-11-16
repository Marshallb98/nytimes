var searchInput = $("#searchInput")
var searchYearS = $("#startYearInput")
var searchYearE = $("#endYearInput")


$("#searchButton").on("click", function (event) {
    event.preventDefault()
    $( "#articlesResults" ).children().remove();
    var searchRetrieve = $("#inputGroupSelect03 option:selected").html();
    console.log(searchRetrieve)
    var number = searchRetrieve
    console.log(number)
   var text = $(searchInput).val()
   console.log(text)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + text + "&api-key=rt6mCfX88AmwEG3EU1GD7LryEHuCvPQX"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.response.docs)
        var results = response.response.docs
        for (var i = 0; i < searchRetrieve; i++) {
            var titleEl = $("<li><a style=color: #fb3f00; text-decoration; none; href="+results[i].web_url+">"+results[i].headline.main +"<img src=http://static01.nyt.com/"+results[i].multimedia[22].url+"></a><p>"+results[i].lead_paragraph+"</p></li>")
            console.log(titleEl)
            $("#articlesResults").append(titleEl)
        }
    })

})
$("#clearButton").on("click", function (event) {
    $( "#articlesResults" ).children().remove();
})