var getText = document.getElementById("mytext");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");
function bold()
  {
    if(getText.style.fontWeight=="bold"){
        getText.style.fontWeight="normal";
    }
    else{
        getText.style.fontWeight="bold";
    }
  }
  function italique()
  {
    if(getText.style.fontStyle=="italic"){
        getText.style.fontStyle="normal";
    }
    else{
        getText.style.fontStyle="italic";
    }
      
  }
  function souligne()
  {
  
    if(getText.style.textDecoration=="underline"){
        getText.style.textDecoration="";
    }
    else{
        getText.style.textDecoration="underline";
    }
  }
  function changeSize(){
    getText.style.fontSize=selectSize.value;
}

function changePolice(){
    getText.style.fontFamily=selectPolice.value;
}

      