$(document).ready(function(){
  
  $("#random").on("click", function() {
    $("#random").css("text-decoration", "none");
  });

  $("#search").on("click", function() {
    $(".searchBar").html("<form><input id='searchBar' type='text' placeholder='Search Wikipedia'/><button id='searchButton' type='button'><i class='fa fa-search fa-2x' aria-hidden='true'></i></button></form>"); 
  

    $("#searchButton").on("click", function(){
      var userInput = $("#searchBar").val();
      $.getJSON(
        "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ userInput +"&format=json&callback=?", 
         function(json) {
            $("#list").html("");
            for(var i=0; i<json[1].length; i++) {
              $("#list").prepend("<li class='links'><a href= " + json[3][i] + ">" + json[1][i] + "</a><p class='descrip'>" + json[2][i] + "</p></li>");
            }
          }
      );
      $("#searchBar").val("");
    });
    
    $("#searchBar").keypress(function(e){
      if(e.which==13) {
        $("#searchButton").click();
        e.preventDefault();
      }
    });
  });
  
})

