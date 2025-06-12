const skills = {
    "languages": [
        {
            "name": "HTML",
            "className": "devicon-html5-plain"
        },
        {
            "name": "CSS",
            "className": "devicon-css3-plain"
        },
        {
            "name": "JavaScript",
            "className": "devicon-javascript-plain"
        },
        {
            "name": "TypeScript",
            "className": "devicon-typescript-plain"
        },
        {
            "name": "Python",
            "className": "devicon-python-plain"
        },
        {
            "name": "C++",
            "className": "devicon-cplusplus-plain"
        },
        {
            "name": "SQL",
            "className": "devicon-mysql-original"
        },
    ],
    "libraries": [
        {
            "name": "React",
            "className": "devicon-react-original"
        },
        {
            "name": "React Native",
            "className": "devicon-react-original"
        },
        {
            "name": "React Navigation",
            "className": "devicon-reactnavigation-original"
        },
        {
            "name": "Tailwind",
            "className": "devicon-tailwindcss-original"
        },
        {
            "name": "Express",
            "className": "devicon-express-original"
        },
        {
            "name": "FastAPI",
            "className": "devicon-fastapi-plain"
        },
        {
            "name": "Vite",
            "className": "devicon-vitejs-plain"
        },
    ],
    "tools": [
        {
            "name": "Git",
            "className": "devicon-git-plain"
        },
        {
            "name": "GitHub",
            "className": "devicon-github-original"
        },
        {
            "name": "VS Code",
            "className": "devicon-vscode-plain"
        },
        {
            "name": "Neovim",
            "className": "devicon-neovim-plain"
        },
        {
            "name": "npm",
            "className": "devicon-npm-original-wordmark"
        },
        {
            "name": "pnpm",
            "className": "devicon-pnpm-plain"
        },

    ],
    "interested": [
        {
            "name": "Rust",
            "className": "devicon-rust-original"
        },
        {
            "name": "Tauri",
            "className": "devicon-tauri-plain"
        },
        {
            "name": "Docker",
            "className": "devicon-docker-plain"
        },
        {
            "name": "Astro",
            "className": "devicon-astro-plain"
        },
        {
            "name": "Vue",
            "className": "devicon-vuejs-plain"
        },
        {
            "name": "Go",
            "className": "devicon-go-original-wordmark"
        },
    ]

}
const experience = {
    "work": [
        {
            "work-place": "DDUC ACM STUDENT CHAPTER",
            "location": "Dwarka, Delhi",
            "work-position": "Executive & part of the Web Team",
            "time": [
                {
                    "datetime": "2024-08",
                    "Date": "Aug, 2024"
                },
                {
                    "datetime": "2025-05",
                    "Date": "Aug, 2025"
                }
            ],
            "work-point": [
                "Helped maintain the DDUC ACM website.",
                "Handled Outreach program to aware students of benefits of Canva at DIET, GHUMANHERA.",
                "Took peer to peer classes to teach students about web development.",
                "Part of several workshops on different subjects in DDUC.",
                "Organised the ICIST-25 and ICAISA-25 Research Conference. Led the latter.",
                "Worked on the ICIST-25 website"
            ]
        }
    ],
    "project": [
        {
            "project-title": "Retina",
            "project-type": "Android App",
            "tech-stack": "React Native, Firebase",
            "project-point": [
                "App to detect deep fake videos.",
                "It takes a video and returns whether it is real or fake.",
            ]
        },
        {
            "project-title": "Plantify",
            "project-type": "Android App",
            "tech-stack": "React Native, Firebase",
            "project-point": [
                "App for hackathon project to classify 112 native indian plant species.",
            ]
        }
    ]
}

document.addEventListener("keydown", (event) => {
    const input = document.getElementById("cmd")
    const isTypingKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
    if (
        isTypingKey &&
        document.activeElement !== input
    ) {
        input.focus();
    }
    if (event.key === 'Enter') {
        const inputValue = input.value;
        const terminalInput = input.closest('.terminal-input');
        const terminalInputClone = terminalInput.cloneNode(true);
        const main = document.querySelector("main")
        terminalInputClone.querySelector('input').value = '';

        /* Replacing input element with span */
        const span = document.createElement('span')
        span.textContent = inputValue;
        input.parentNode.replaceChild(span, input, terminalInputClone);

        /* returns the output to the command */
        commandHandler(input.value, main);

        /* Appends the terminal input wrapper to the next line */
        main.appendChild(terminalInputClone)

    }
});

const cmds = ['help', 'clear', 'exit', 'inspiration', 'whoami', 'about', 'skills', 'experience','contact']

function commandHandler(cmd, mainElement, clone) {
    const args = cmd.trim().split(' ').filter((word) => word.length > 0);
    const p = document.createElement("p");
    p.className = "output";

    switch (args[0]) {
        case 'exit':
            window.location.href = '/';
            break;

        case 'help':
            p.innerHTML +=
                `
            <span>available commands: </span><span>${cmds.toString().replaceAll(',', ', ')}</span>    
            `
            mainElement.appendChild(p)
            break;

        case 'inspiration':
            p.textContent = "Redirecting... => ";
            const a = document.createElement("a");
            a.href = "https://meddelanden.se/";
            a.target = "_blank"
            a.rel ="noopener noreferrer"	
            a.textContent = "meddelanden.se";
            p.appendChild(a)
            mainElement.appendChild(p)
            setTimeout(() => {
                window.open('https://meddelanden.se/')

            }, 300);
            break;

        case 'whoami':
            p.textContent = document.querySelector('.usr-name').textContent
            p.className = 'output usr-name'
            mainElement.appendChild(p)
            break;

        case 'skills':
            const container = document.createElement('div')
            const skillKeys = Object.keys(skills)
            const skillsArr = Array(skillKeys.length).fill(null).map(() => document.createElement('div'));
            skillsArr.forEach((div, index) => {
                div.className = `skill ${skillKeys[index]}`;
                const nameSpan = document.createElement('span')
                nameSpan.className = 'skill-name'
                nameSpan.textContent = `${skillKeys[index]}:`
                div.appendChild(nameSpan);
                const skillList = document.createElement('ul')
                skills[skillKeys[index]].forEach((el) => {
                    skillList.innerHTML +=
                        `<li><i class="${el.className}"></i><p>${el.name}</p></li>`
                })
                div.appendChild(skillList)
                container.appendChild(div)
            })
            container.className = 'output skills';
            mainElement.appendChild(container)
            break

        case 'clear':
            mainElement.innerHTML = ''
            break;

        case 'about':
            const about = document.createElement('div')
            about.className = 'output about'
            about.innerHTML =
                `
            <h1>Hi, I'm Yash.</h1>
            <ul>
            <li><p>I'm 21 and a CS student. I'm currently pursuing Bsc. CS.</p></li>
            <li><p>I've had 1 year of experience in building websites and mobile apps.</p></li>
            <li><p>I specialize in making responsive, accessible websites using a variety of different web stacks.</p></li>
            <li><p>I love diving deep into random programming rabbit holes. I don't limit myself to a single field.</p></li>
            <li><p>I plan to delve into different CS fields like desktop development, systems engineering, AI, DevOps and so on.</p></li>
            </ul>
            `
            mainElement.appendChild(about)
            break;

        case 'experience':
            const experienceContainer = document.createElement('section')
            experienceContainer.className = 'output experience'
            const workExperience = document.createElement('section')
            workExperience.className = 'work-experience'

            workExperience.innerHTML += `<h3>Work</h3>`
            experience.work.forEach(work => {
                const WorkContainer = document.createElement('article')
                WorkContainer.className = 'work'
                WorkContainer.innerHTML +=
                    `
                <h4 class="work-place">${work['work-place']} <span class="location">${work['location']}</span></h4>
                `
                WorkContainer.innerHTML +=
                    `
                <p class="work-position">${work['work-position']} <span class="time"><time datetime="${work['time'][0].datetime}">${work['time'][0].Date}</time>-<time datetime="${work['time'][1].datetime}">${work['time'][1].Date}</time></span></p>
                `
                const workDescription = document.createElement('ul')
                workDescription.className = 'work-description'
                WorkContainer.appendChild(workDescription)
                work["work-point"].forEach(point => {
                    workDescription.innerHTML +=
                        `
                    <li class="work-point"><p>${point}</p></li>
                    `
                })

                workExperience.appendChild(WorkContainer)
            })

            const projectExperience = document.createElement('section')
            projectExperience.className = 'project-experience'
            projectExperience.innerHTML += `<h3>Projects</h3>`

            experienceContainer.appendChild(projectExperience)

            experience.project.forEach(project => {
                const ProjectContainer = document.createElement('article')
                ProjectContainer.className = 'project'
                ProjectContainer.innerHTML +=
                    `
                <h4 class="project-title">${project['project-title']}</h4>
                `
                ProjectContainer.innerHTML +=
                    `
                <p class="project-type">${project['project-type']} <span class="tech-stack">${project['tech-stack']}</span></p>
                `
                const projectDescription = document.createElement('ul')
                projectDescription.className = 'project-description'
                ProjectContainer.appendChild(projectDescription)
                project["project-point"].forEach(point => {
                    projectDescription.innerHTML +=
                        `
                    <li class="project-point"><p>${point}</p></li>
                    `
                })

                projectExperience.appendChild(ProjectContainer)
            })

            experienceContainer.appendChild(workExperience)
            experienceContainer.appendChild(projectExperience)
            mainElement.appendChild(experienceContainer)
            break;
        case undefined:
            break;

        default:
            const commandSpan = document.createElement("span");
            commandSpan.textContent = `${args[0]}: `;
            const errorSpan = document.createElement("span");
            errorSpan.className = "error";
            errorSpan.textContent = "command not found.";
            p.appendChild(commandSpan);
            p.appendChild(errorSpan);
            mainElement.appendChild(p);
            break;
    }
}
