
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


//Lesson 6.1 AJAX Basics

//"fetching" from API
let githubRequest = new XMLHttpRequest();
let url = "https://api.github.com/users/LawrenceELee/repos"
githubRequest.open("GET", url);
githubRequest.send();

//doing something with the data you just fetched
githubRequest.addEventListener('load', myGithubEventListener);
let repositories = "";
function myGithubEventListener(){
	repositories = JSON.parse(this.response);	
	console.log(`my repos: ${repositories}, length: ${repositories.length}`);
	let projectSection = document.querySelector('#projects');

	let projectList = projectSection.querySelector('ul');
		for(let i=0; i < repositories.length; i++){
			let project = document.createElement('li');
			
			//both ways to access object values are acceptable
			//project.innerHTML = repositories[i]['name'];
			project.innerHTML = repositories[i].name;
			
			//project.innerHTML = i;
			
			projectList.appendChild(project);
		}
}
//the below console is out of scope
//console.log(`my repos: ${repositories}, length: ${repositories.length}`);


//display repos in list
//this code has to be inside the function, otherwise it is out of scope and
//won't have any data
/*
let projectSection = document.querySelector('#projects');
let projectList = projectSection.querySelector('ul');
for(let i=0; i < repositories.length; i++){
	let project = document.createElement('li');
	//project.innerHTML = repositories[i]['name'];
	project.innerHTML = i;
	projectList.appendChild(project);
}
*/