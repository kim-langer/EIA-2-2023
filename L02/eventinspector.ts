
//Die Seite soll erst vollständig geladen werden//
window.addEventListener('load', function() {

  //Die Funktion, die auf Aktiviäten auf der Seite hört//
  function handleload() {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
  
    const body = document.getElementsByTagName("body")[0];
    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);
  
      //Schleife, die sicherstellt, dass auf beide Div Elemente reagiert wird//
    const divs = document.getElementsByClassName("divs");
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("click", logInfo);
      divs[i].addEventListener("keyup", logInfo);
    }
  }
  

hi.addeventlistener ("click", function setinfoBox (_event:MouseEvent) {


    });

    function logInfo () {


    };




  });
  