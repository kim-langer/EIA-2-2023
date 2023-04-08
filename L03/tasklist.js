/*Aufgabe: L03
Name: Kim Langer
Matrikelnummer: 272232
*/
document.getElementById('PopupButton').addEventListener('click', openPopup);
function openPopup() {
    // Erstellen eines HTML-Strings für das Pop-Up-Fenster //
    let popupHTML = '<div id="popup">';
    popupHTML += '<h2>Pop-Up-Fenster</h2>';
    popupHTML += '<form>';
    popupHTML += '<label for="name">Name:</label>';
    popupHTML += '<input type="text" id="name" name="name"><br>';
    popupHTML += '<label for="email">E-Mail:</label>';
    popupHTML += '<input type="email" id="email" name="email"><br>';
    popupHTML += '<button type="submit">Absenden</button>';
    popupHTML += '</form>';
    popupHTML += '</div>';
    // Hinzufügen des Pop-Up-Fensters zum DOM //
    const popupContainer = document.createElement('div');
    popupContainer.innerHTML = popupHTML;
    document.body.appendChild(popupContainer);
    // Style des Pop-Up-Fensters ändern //
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = '#';
    popupContainer.style.padding = '20px';
    popupContainer.style.border = '1px solid #000';
    popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}
;
//# sourceMappingURL=tasklist.js.map