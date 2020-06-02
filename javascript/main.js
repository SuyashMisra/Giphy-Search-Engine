
//add event listener to search button
document.querySelector(".js-go").addEventListener('click', function(){
    document.querySelector(".js-container").innerHTML = ""; //clear container before every new search
    var a = document.querySelector(".js-userinput").value;  //grab the input from text input

    var url = "https://api.giphy.com/v1/gifs/search?q="+a+"&api_key=dc6zaTOxFJmzC";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();        

    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        pushToDOM(data);
    });
})

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    
    var a = document.querySelector(".js-userinput").value;  //grab the input from text input
    //e is the event data, that can be seen in console.log(e)
    //if the key pressed is 'Enter' then push, keyCode of enter is 13
    if (e.which===13) {
        document.querySelector(".js-container").innerHTML = ""; //clear container before every new search
        var url = "https://api.giphy.com/v1/gifs/search?q="+a+"&api_key=dc6zaTOxFJmzC";

        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();   //initiates the request
    
        //add event listener that listens when data is loaded
        GiphyAJAXCall.addEventListener('load',function(e){
            var data = e.target.response;   //JSON object
            pushToDOM(data);    //place the data on page
        })
   
    }
    
})


function pushToDOM(input){
    var inp = JSON.parse(input);    //parse the json input into javascript object
    // console.log(inp);
    inp.data.forEach(element => {      //inp.data is an array of search results
        var url = element.images.fixed_height.url;  //get the image url
        document.querySelector(".js-container").innerHTML+="<img src=\""+url+"\" class=\"container-image\">";   //add img to container
    });
}