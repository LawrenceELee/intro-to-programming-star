
let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');
//footer.innerHTML = thisYear;

const copyright = document.createElement('p');
copyright.innerHTML  = "&copy; Lawrence " + thisYear;

footer.appendChild(copyright);

let skills = ["Javascript", "HTML", "CSS", "Java", "Python", "C", "Git", "a little bit of Ruby"];
const skillsSection = document.querySelector('#skills');

let skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
	let li = document.createElement('li');
	li.innerHTML = skills[i];
	skillsList.appendChild(li);
}


let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (e) => {
	
	
	//can't use the function declaration way!
	//MUST use arrow syntax.
	
	e.preventDefault();
	


	
	let name = "myName";
	let email = "myEmail";
	let message = "myMessage";

	
	name = e.target.name.value;
	email = e.target.email.value;
	message = e.target.message.value;

	
	console.log(`name: ${name}, email: ${email}, message: ${message}`);
	//console.log(`event: ${event}`);

	let messageSection = document.getElementById("messages");
	let messageList = messageSection.querySelector('ul');
	
	let newMessage = document.createElement('li');
	newMessage.innerHTML = `<a href=mailto:${email}>${name}</a> wrote: <span>${message} </span>`;
	
	let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.className = "remove";
	
	removeButton.addEventListener("click", (e) => {
		let li  = e.target.parentNode;
		let ul = li.parentNode;
		li.remove();
	});
	
	newMessage.appendChild(removeButton);
	messageList.appendChild(newMessage);

	
	
	
	
	messageForm.reset();


});