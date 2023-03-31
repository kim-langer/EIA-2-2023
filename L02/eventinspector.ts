/*Aufgabe: L02
Name: Kim Langer
Matrikelnummer: 27174
*/

//Die Seite soll erst vollständig geladen werden//
window.addEventListener('load', function () {

  //globale Variablen//
  let infobox = document.getElementById("thespan") as HTMLSpanElement;

  //Die Funktion, die auf Aktiviäten auf der Seite hört//
  function handleload() {
    document.addEventListener("mousemove", setinfoBox);
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
  };

  //Inhalt des Span-Elements anzeigen//
  function setinfoBox(_event: MouseEvent) {
    const positionx: number = _event.clientX;
    const positiony: number = _event.clientY;

    let x: string = String(positionx + 15);
    let y: string = String(positiony + 15);

    let infobox = document.getElementById("thespan") as HTMLSpanElement;
    infobox.innerHTML = "position x: " + x + " position y: " + y + " Event-Target: " + _event.target;

    infobox.style.position = "fixed";
    infobox.style.top = y + "px";
    infobox.style.left = x + "px";
  };

  //Infos in der Konsole aufrufen//
  function logInfo(_event: Event) {

    console.log(_event.type + _event.target + _event.currentTarget + _event);

  };

  handleload();

});
