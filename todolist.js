
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");  //fetching the form by using the query selector.
	const input = document.querySelector("#new-task-input");//fetching the input bar .
	const list_el = document.querySelector("#tasks");//fetching the tasks .

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value; //storing the input value.
		if(!task){  
			alert("Please fill out the task"); //condition while adding the tasking when nothing is written to add.
			return;
		}

		const task_el = document.createElement('div');//creating a div for task element.
		

		const task_content_el = document.createElement('div');//creating a div for task content.
		

		task_el.appendChild(task_content_el);//appending child to task_el which is task_content_el.

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');//adding class text to task_input_el to grab the features of class text.
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');//readonly has been set to restrict the edit.

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');//adding the class actions.
		
		const task_edit_el = document.createElement('button');//creating the edit button.
		task_edit_el.classList.add('edit');//adding the class edit.
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');//creating the delete button.
		task_delete_el.classList.add('delete');//adding the class delete.
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);//appending the child delete and edit to the actions part.
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);//appending the edit and delete buttons to the task element.

		list_el.appendChild(task_el);//appending the tasl element to the list element.

		input.value = '';//after adding the task , the task written will be vanished from the input area automatically.

		task_edit_el.addEventListener('click', (e) => {  //adding event listener to the edit button.
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");//removing the readonly attribute so that editing can happen.
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {//adding event listener to the delete button.
			list_el.removeChild(task_el); //removing the child tasl element from the task list.
		});
	});
});