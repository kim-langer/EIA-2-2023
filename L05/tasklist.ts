/*Aufgabe: L05
Name: Kim Langer
Matrikelnummer: 272232
*/

namespace L05 {

  document.getElementById('PopupButton').addEventListener('click', openPopup);

  function openPopup(): void {
    // Erstellen eines HTML-Strings für das Pop-Up-Fenster //
    let popupHTML: string = '<div id="popup">';
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
    let popupContainer: HTMLElement = document.createElement('div');
    popupContainer.innerHTML = popupHTML;
    document.body.appendChild(popupContainer);
    popupContainer.id = 'popup-container';


    // Style des Pop-Up-Fensters festlegen //
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '300px';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = '#54935d';
    popupContainer.style.padding = '20px';
    popupContainer.style.border = '1px solid #fff';

    // Hinzufügen von mehr Abstand zwischen den Eingabefeldern //
    let inputFields: NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = popupContainer.querySelectorAll('input, textarea, select');
    inputFields.forEach((field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      field.style.marginBottom = '20px';
    });

    document.querySelector('#submitbutton').addEventListener('click', addTask);
  };

  let data = { Input: [] };

  // Neue Aufgabe erstellen und Hinzufügen zum HTML //
  function createTaskElement(_task: Task): HTMLElement {
    let taskDiv: HTMLDivElement = document.createElement('div');
    taskDiv.classList.add('task');

    let tasknameInput: HTMLInputElement = document.createElement('input');
    tasknameInput.type = 'text';
    tasknameInput.value = _task.taskname;
    tasknameInput.classList.add('style-input');

    let commentInput: HTMLTextAreaElement = document.createElement('textarea');
    commentInput.value = _task.comment;

    let responsibleInput: HTMLSelectElement = document.createElement('select');
    responsibleInput.innerHTML = `
      <option value="person1">Max</option>
      <option value="person2">Mike</option>
      <option value="person3">Anna</option>
    `;
    responsibleInput.value = _task.responsible;

    let deadlineInput: HTMLInputElement = document.createElement('input');
    deadlineInput.type = 'date';
    deadlineInput.value = _task.deadline;

    let inProgressInput: HTMLInputElement = document.createElement('input');
    inProgressInput.type = 'checkbox';
    inProgressInput.checked = _task.status;

    let deleteButton: HTMLButtonElement = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.addEventListener('click', () => {
      deleteTask(_task, taskDiv);
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

    if (_task.status) {
      document.querySelector('.in-progress-tasks').appendChild(taskDiv);
    } else {
      document.querySelector('.open-tasks').appendChild(taskDiv);
    }

    // Event-Listener für das Klicken der Checkbox und das es in den richtigen Bereich geschoben wird //
    inProgressInput.addEventListener('change', moveTaskToInProgress);

    return taskDiv;
  }


  function addTask(_event: Event): void {
    _event.preventDefault();

    let tasknameInput: HTMLInputElement = document.querySelector('#taskname');
    let commentInput: HTMLTextAreaElement = document.querySelector('#comment');
    let responsibleInput: HTMLSelectElement = document.querySelector('#responsible');
    let deadlineInput: HTMLInputElement = document.querySelector('#deadline');
    let inProgressInput: HTMLInputElement = document.querySelector('#inProgress');


    // Neue Aufgabe erstellen mit den Werten aus dem PopUp
    let newTask: Task = {
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
    document.querySelector('#popup-container').remove();

  };

  // Funktion für das Klicken der Checkbox//
  function moveTaskToInProgress(_event: Event): void {
    let checkbox: HTMLInputElement = _event.target as HTMLInputElement;
    let taskDiv: HTMLDivElement = checkbox.closest('.task') as HTMLDivElement;

    if (checkbox.checked) {
      document.querySelector('.in-progress-tasks').appendChild(taskDiv);
    } else {
      document.querySelector('.open-tasks').appendChild(taskDiv);
    }
  }

  // Aufgaben wieder löschen//
  function deleteTask(_task: Task, _taskElement: HTMLElement): void {
    let index = data.Input.findIndex((t: Task) => t === _task);
    if (index !== -1) {
      data.Input.splice(index, 1);
      _taskElement.remove();
    }
  }

  // Funktionen, um die Daten asynchron zu senden//
  async function sendTask(_event: Event): Promise<void> {
    let formData: FormData = new FormData(form)
    let query: URLSearchParams = new URLSearchParams(<any>FormData)
    await fetch("tasklist.html?" + query.toString());
  }

  async function waitforResponse (): Promise<void> {
    let response: Response = await fetch("Data.json");
    let taskcontent: string = await response.text ();
    let data: Entries = JSON.parse(taskcontent);
    }

  let tasksubmit = document.querySelector("#submitbutton")
  tasksubmit.addEventListener("click", sendTask)
  tasksubmit.addEventListener("click", waitforResponse)

}