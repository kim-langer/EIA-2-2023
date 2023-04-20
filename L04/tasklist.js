/*Aufgabe: L04
Name: Kim Langer
Matrikelnummer: 272232
Quellen: EIA 1 Aufgaben, ChatGPT
*/
var L04;
(function (L04) {
    document.getElementById('PopupButton').addEventListener('click', openPopup);
    function openPopup() {
        // Erstellen eines HTML-Strings für das Pop-Up-Fenster //
        let popupHTML = '<div id="popup">';
        popupHTML += '<h3>Erstelle eine neue Aufgabe</h3>';
        popupHTML += '<form>';
        popupHTML += '<input type="text" id="taskname" name="name" placeholder="Beschreibe deine Aufgabe"><br>';
        popupHTML += '<textarea id="comment" name="comment" placeholder="Gibts noch was anzumerken?"></textarea><br>'; // textarea für Kommentare
        popupHTML += '<label for="assignee">Zuständige Person:</label>';
        popupHTML += '<select id="responsible" name="responsible">'; // zuständige Person auswählen per Dropdown-Menü
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
        let popupContainer = document.createElement('div');
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
        let inputFields = popupContainer.querySelectorAll('input, textarea, select');
        inputFields.forEach((field) => {
            field.style.marginBottom = '20px';
        });
        document.querySelector('#submitbutton').addEventListener('click', addTask);
    }
    ;
    let data = { Input: [] };
    // Neue Aufgabe erstellen und Hinzufügen zum HTML //
    function createTaskElement(task) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        let tasknameInput = document.createElement('input');
        tasknameInput.type = 'text';
        tasknameInput.value = task.taskname;
        tasknameInput.classList.add('style-input');
        let commentInput = document.createElement('textarea');
        commentInput.value = task.comment;
        let responsibleInput = document.createElement('select');
        responsibleInput.innerHTML = `
      <option value="person1">Max</option>
      <option value="person2">Mike</option>
      <option value="person3">Anna</option>
    `;
        responsibleInput.value = task.responsible;
        let deadlineInput = document.createElement('input');
        deadlineInput.type = 'date';
        deadlineInput.value = task.deadline;
        let inProgressInput = document.createElement('input');
        inProgressInput.type = 'checkbox';
        inProgressInput.checked = task.status;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Löschen';
        deleteButton.addEventListener('click', () => {
            deleteTask(task, taskDiv);
        });
        taskDiv.appendChild(document.createElement('h4')).appendChild(tasknameInput);
        taskDiv.appendChild(document.createElement('p')).textContent = `Zuständige Person: `;
        taskDiv.lastChild.appendChild(responsibleInput);
        taskDiv.appendChild(document.createElement('p')).textContent = 'Deadline: ';
        taskDiv.lastChild.appendChild(deadlineInput);
        taskDiv.appendChild(inProgressInput);
        taskDiv.appendChild(document.createElement('label')).textContent = 'wird bereits erledigt';
        taskDiv.appendChild(document.createElement('p')).appendChild(commentInput);
        taskDiv.appendChild(deleteButton);
        if (task.status) {
            document.querySelector('.in-progress-tasks').appendChild(taskDiv);
        }
        else {
            document.querySelector('.open-tasks').appendChild(taskDiv);
        }
        // Event-Listener für das Klicken der Checkbox und das es in den richtigen Bereich geschoben wird //
        inProgressInput.addEventListener('change', moveTaskToInProgress);
        return taskDiv;
    }
    function addTask(event) {
        event.preventDefault();
        let tasknameInput = document.querySelector('#taskname');
        let commentInput = document.querySelector('#comment');
        let responsibleInput = document.querySelector('#responsible');
        let deadlineInput = document.querySelector('#deadline');
        let inProgressInput = document.querySelector('#inProgress');
        // Neue Aufgabe erstellen mit den Werten aus dem PopUp
        let newTask = {
            taskname: tasknameInput.value,
            comment: commentInput.value,
            responsible: responsibleInput.value,
            deadline: deadlineInput.value,
            status: inProgressInput.checked
        };
        // Aufgabe pushen
        data.Input.push(newTask);
        // HTML updaten
        createTaskElement(newTask);
        document.querySelector('#popup').remove();
    }
    ;
    // Funktion für das Klicken der Checkbox//
    function moveTaskToInProgress(event) {
        let checkbox = event.target;
        let taskDiv = checkbox.closest('.task');
        if (checkbox.checked) {
            document.querySelector('.in-progress-tasks').appendChild(taskDiv);
        }
        else {
            document.querySelector('.open-tasks').appendChild(taskDiv);
        }
    }
    // Aufgaben wieder löschen//
    function deleteTask(task, taskElement) {
        let index = data.Input.findIndex((t) => t === task);
        if (index !== -1) {
            data.Input.splice(index, 1);
            taskElement.remove();
        }
    }
})(L04 || (L04 = {}));
//# sourceMappingURL=tasklist.js.map