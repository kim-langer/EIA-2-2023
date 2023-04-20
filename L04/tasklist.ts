/*Aufgabe: L04
Name: Kim Langer
Matrikelnummer: 272232
*/

namespace L04 {

  document.getElementById('PopupButton').addEventListener('click', openPopup);

  function openPopup(): void {
    // Erstellen eines HTML-Strings für das Pop-Up-Fenster //
    let popupHTML: string = '<div id="popup">';
    popupHTML += '<h3>Erstelle eine neue Aufgabe</h3>';
    popupHTML += '<form>';
    popupHTML += '<label for="text">Aufgabe:</label>';
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
    const popupContainer: HTMLElement = document.createElement('div');
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
    const inputFields: NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = popupContainer.querySelectorAll('input, textarea, select');
    inputFields.forEach((field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      field.style.marginBottom = '20px';
    });

    document.querySelector('#submitbutton').addEventListener('click', addTask);
  };

  const data = { Input: [] };

  function addTask(event: Event): void {
    event.preventDefault(); 
    
    const tasknameInput: HTMLInputElement = document.querySelector('#taskname');
    const commentInput: HTMLTextAreaElement = document.querySelector('#comment');
    const responsibleInput: HTMLSelectElement = document.querySelector('#responsible');
    const deadlineInput: HTMLInputElement = document.querySelector('#deadline');
    const inProgressInput: HTMLInputElement = document.querySelector('#inProgress');
    
    // Neue Aufgabe erstellen mit den Werten aus dem PopUp
    const newTask: Task = {
      taskname: tasknameInput.value,
      comment: commentInput.value,
      responsible: responsibleInput.value,
      deadline: deadlineInput.value,
      status: inProgressInput.checked
    };
    
    // Aufgabe pushen
    data.Input.push(newTask);
    
    // HTML updaten
    const openTasksDiv: HTMLDivElement = document.querySelector('.open-tasks');
    const taskDiv: HTMLDivElement = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
      <h4>${newTask.taskname}</h4>
      <p>${newTask.comment}</p>
      <ul>
        <li>Zuständige Person: ${newTask.responsible}</li>
        <li>Deadline: ${newTask.deadline}</li>
      </ul>
    `;
    if (newTask.status) {
      document.querySelector('.in-progress-tasks').appendChild(taskDiv);
    } else {
      openTasksDiv.appendChild(taskDiv);
    }

    document.querySelector('#popup').remove();
    
  };
  
  }