import data from './data.json' assert {type : 'json'};

const skillWrap = document.getElementById('skills-wrap');
const projects = document.getElementById('pr-list');
const prevProjBtn = document.getElementById('prev');
const nextProjBtn = document.getElementById('next');

console.log(skillWrap);

function displaySkils() {

    skillWrap.innerHTML = '';

    for (let i in data.skills) {
        const val = data.skills[i];
        const skillBorder = document.createElement('div');
        const skill = document.createElement('div');

        skillBorder.className = "skill-border",
        skill.className = 'skill';

        skill.textContent = i;

        if (val >= 50) {
            skillBorder.style.background = `linear-gradient(120deg, hsl(27, 48%, 52%) ${val}%, transparent ${100-val}%)`;
        } else {
            skillBorder.style.background = `linear-gradient(0deg, black ${100-val}%, hsl(27, 48%, 52%) ${val}%)`;
        }

        skillBorder.appendChild(skill);
        skillWrap.appendChild(skillBorder);
    }
}

function displayProjects() {
    data.projects.forEach((i, ind) => {
        const project = document.createElement('div');
        const projectImg = document.createElement('div');
        const projectName = document.createElement('p');
        const projectDetail = document.createElement('a');
        const usedLanguages = document.createElement('div');

        let switcher = '';

        if ((ind + 1) % 3 == 0) {
            switcher = "pr-right";
        } else if ((ind + 1) % 2 == 0) {
            switcher = "pr-left";
        }  else {
            switcher = "pr-center";
        }


        project.classList.add("project", switcher);
        projectImg.className = "project-img";
        projectName.className = "pr--name";
        projectDetail.className = "pr-more";
        usedLanguages.className = "prog-languages";

        projectDetail.target = "_blank";
        projectDetail.href = i.link;
        projectDetail.textContent = "More..."
        projectName.textContent = i.name;
        projectImg.style.backgroundImage = i.photo;

        projectImg.append(projectName, projectDetail);
        
        for (let j of i.progLang) {
            const usedLanguage = document.createElement('div');
            const prjCircle = document.createElement('span');
            const prjLanContent = document.createElement('span');

            usedLanguage.className = "prog-language";
            prjCircle.className = "pr-cir";
            prjLanContent.textContent = j;

            usedLanguage.append(prjCircle, prjLanContent);
            usedLanguages.appendChild(usedLanguage);
        }

        project.append(projectImg, usedLanguages);
        projects.appendChild(project);
    })
}

displayProjects()
displaySkils();