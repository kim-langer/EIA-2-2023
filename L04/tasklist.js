/*Aufgabe: L04
Name: Kim Langer
Matrikelnummer: 272232
*/
var L04;
(function (L04) {
    document.getElementById('PopupButton').addEventListener('click', openPopup);
    function openPopup() {
        // Erstellen eines HTML-Strings für das Pop-Up-Fenster //
        let popupHTML = '<div id="popup">';
        popupHTML += '<h3>Erstelle eine neue Aufgabe</h3>';
        popupHTML += '<form>';
        popupHTML += '<label for="text">Aufgabe:</label>';
        popupHTML += '<input type="text" id="taskname" name="name" placeholder="Beschreibe deine Aufgabe"><br>';
        popupHTML += '<textarea id="comment" name="comment" placeholder="Gibts noch was anzumerken?"></textarea><br>'; // textarea für Kommentare
        popupHTML += '<label for="assignee">Zuständige Person:</label>';
        popupHTML += '<select id="assignee" name="assignee">'; // zuständige Person auswählen per Dropdown-Menü
        popupHTML += '<option value="">Bitte auswählen</option>';
        popupHTML += '<option value="person1">Max</option>';
        popupHTML += '<option value="person2">Mike</option>';
        popupHTML += '<option value="person3">Anna</option>';
        popupHTML += '</select><br>';
        popupHTML += '<label for="deadline">Deadline:</label>';
        popupHTML += '<input type="date" id="deadline" name="deadline"><br>'; // Datumseingabe/Deadline festlegen
        popupHTML += '<input type="checkbox" id="inProgress" name="inProgress">';
        popupHTML += '<label for="inProgress">in Bearbeitung</label><br>'; // Ist die Aufgabe in Bearbeitung?
        popupHTML += '<button id="submitbutton" type="submit">Aufgabe hinzufügen</button>';
        popupHTML += '</form>';
        popupHTML += '</div>';
        // Hinzufügen des Pop-Up-Fensters zum DOM //
        const popupContainer = document.createElement('div');
        popupContainer.innerHTML = popupHTML;
        document.body.appendChild(popupContainer);
        // Style des Pop-Up-Fensters festlegen //
        popupContainer.style.position = 'fixed';
        popupContainer.style.top = '300px';
        popupContainer.style.left = '50%';
        popupContainer.style.transform = 'translate(-50%, -50%)';
        popupContainer.style.backgroundColor = '#54935d';
        popupContainer.style.padding = '20px';
        popupContainer.style.border = '1px solid #fff';
        // Hinzufügen von mehr Abstand zwischen den Eingabefeldern //
        const inputFields = popupContainer.querySelectorAll('input, textarea, select');
        inputFields.forEach((field) => {
            field.style.marginBottom = '20px';
        });
        document.getElementById('submitbutton').addEventListener('click', addTask);
    }
    ;
    // Code zur Verarbeitung des Formulars
    function addTask(event) {
        // Formular-Standardverhalten verhindern
        event.preventDefault();
        // Die Werte der Formularfelder auslesen
        const taskName = document.getElementById('taskname').value;
        const comment = document.getElementById('comment').value;
        const assignee = document.getElementById('assignee').value;
        const deadline = document.getElementById('deadline').value;
        const inProgress = document.getElementById('inProgress').checked;
        // Das Pop-Up-Fenster ausblenden
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
        // Die neue Aufgabe zur entsprechenden Kategorie hinzufügen
        const taskList = inProgress ? document.getElementById('in-progress-tasks') : document.getElementById('open-tasks');
        const newTask = document.createElement('li');
        newTask.textContent = taskName;
        taskList.appendChild(newTask);
    }
})(L04 || (L04 = {}));
//# sourceMappingURL=tasklist.js.map