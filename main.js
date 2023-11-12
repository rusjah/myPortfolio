import data from './data.json' assert {type : 'json'};

const skillWrap = document.getElementById('skills-wrap');

console.log(skillWrap);

function createSkils() {

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
        console.log(i, val);
    }
}

createSkils();