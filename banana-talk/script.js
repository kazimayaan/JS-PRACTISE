var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#textfromuser")


var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslation(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("error occurred at server!, try again after some time.")
}



btnTranslate.addEventListener("click", () => {
     var inputText = textInput.value;
    fetch(getTranslation(inputText))
    .then (Response => Response.json())
    .then (json =>{
        outputDiv.innerText =  json.contents.translated
        console.log(json.contents.translated)} )
    .catch(errorHandler)
    
     })

