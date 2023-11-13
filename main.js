import data from './data.json' assert {type : 'json'};

const skillWrap = document.getElementById('skills-wrap');
const projects = document.getElementById('pr-list');
const prevProjBtn = document.getElementById('prev');
const nextProjBtn = document.getElementById('next');
const switcher = document.getElementById('switcher')


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
displaySkils();



function createProgLang(arr) {
    const usedLanguages = document.createElement('div');

    for (let j of arr) {
        const usedLanguage = document.createElement('div');
        const prjCircle = document.createElement('span');
        const prjLanContent = document.createElement('span');

        usedLanguage.className = "prog-language";
        prjCircle.className = "pr-cir";
        prjLanContent.textContent = j;

        usedLanguage.append(prjCircle, prjLanContent);
        usedLanguages.appendChild(usedLanguage);
    }
    return usedLanguages;
}

function createProjImg(i) {
        const projectImg = document.createElement('div');
        const projectName = document.createElement('p');
        const projectDetail = document.createElement('a');

        projectImg.className = "project-img";
        projectName.className = "pr--name";
        projectDetail.className = "pr-more";


        projectDetail.target = "_blank";
        projectDetail.href = i.link;
        projectDetail.textContent = "More..."
        projectName.textContent = i.name;
        projectImg.style.backgroundImage = i.photo;

        projectImg.append(projectName, projectDetail);
        return projectImg;
}

function createDot(n, switcher) {
    for (let i = 0; i < n; i++) {
        const span = document.createElement('span');
        span.className = "dot";
        switcher.appendChild(span)
    }
}

function displayProjects() {
    projects.innerHTML = '';

    const showedProject = data.projects.slice(0,3);
    console.log(data.projects);
    const positionClasses = ['pr-left','pr-center','pr-right'];


    for (let i = 0; i < showedProject.length; i++) {
        const el = showedProject[i];
        const project = document.createElement('div')
        const projectImg = createProjImg(el);
        const usedLanguages = createProgLang(el.progLang);

        project.classList.add("project", positionClasses[i]);
        usedLanguages.className = "prog-languages";
        project.append(projectImg, usedLanguages);
        projects.appendChild(project);
    }
}

displayProjects()