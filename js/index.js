
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