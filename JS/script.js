const menuBar = document.getElementById('menuBarId');
const sideMenu = document.querySelector(".side-menu");
const buttonsHeaderDiv = document.querySelector('.buttons-header-div')

const btnScrollTo = document.querySelector('.my-knowledge');
const knowledgeSection = document.querySelector('.coding-text');

const project = document.querySelectorAll('.project');
const btnShowProjectWindow = document.querySelectorAll('.show-project');
const allSections = document.querySelectorAll('.section');

const overlay = document.querySelector('.overlay');
const btnCloseProjectWindow1 = document.querySelector('.close-project1');
const btnCloseProjectWindow2 = document.querySelector('.close-project2');
const btnCloseProjectWindow3 = document.querySelector('.close-project3');
const btnCloseProjectWindow4 = document.querySelector('.close-project4');


const openMenuBar = function () {
    menuBar.classList.add("change");
    sideMenu.classList.add("active");
    sideMenu.style.display = 'block';
}

const closeMenuBar = function () {
    menuBar.classList.remove("change");
    sideMenu.classList.remove("active");
    sideMenu.style.display = 'none';
};

const toggleMenuBar = function () {
    if (menuBar.classList.contains("change")) {
        closeMenuBar();
    } else {
        openMenuBar();
    }
}

menuBar.addEventListener('click', toggleMenuBar);


const openProject = function (projectId) {
    const project = document.getElementById(projectId)
    project.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeProject = function () {
    project.forEach(function (projectItem) {
        projectItem.classList.add('hidden');
    });
    overlay.classList.add('hidden');
}


for (let i = 0; i < btnShowProjectWindow.length; i++) {
    btnShowProjectWindow[i].addEventListener('click', function () {
        const projectId = this.dataset.target;
        openProject(projectId);
    })
}

btnCloseProjectWindow1.addEventListener('click', closeProject);
overlay.addEventListener('click', closeProject);

btnCloseProjectWindow2.addEventListener('click', closeProject);
overlay.addEventListener('click', closeProject);

btnCloseProjectWindow3.addEventListener('click', closeProject);
overlay.addEventListener('click', closeProject);

btnCloseProjectWindow4.addEventListener('click', closeProject);
overlay.addEventListener('click', closeProject);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !project.classList.contains('hidden')) {
        closeProject();
    }
});

// Show project with scroll
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    btnShowProjectWindow.forEach(function (button) {
        if (scrollPosition > 150 || window.innerWidth <= 600) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
});

// Get knowledge-icons & text with Intersection Observer API
const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.35,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Scroll to Knowledge-container
btnScrollTo.addEventListener('click', function (e) {
    const knowledgeCoords = knowledgeSection.getBoundingClientRect();

    window.scrollTo({
        left: knowledgeCoords.left + window.pageXOffset,
        top: knowledgeCoords.top + window.pageYOffset,
        behavior: 'smooth'
    });
});

btnScrollTo.addEventListener('click', closeMenuBar);

//Page 1 Toggler
const toggleText = {
    sv: {
        languageToggler: "English",
        portfolioBy: "Portfolio av",
        webDeveloper: "Jag är Webbutvecklare",
        aboutMe: "Om mig",
        cv: "Ladda ner CV",
        competence: "Kompetens",
        myProjectsText: "Mina Projekt",
        project1Open: "Se projektet",
        project2Open: "Se projektet",
        project3Open: "Se projektet",
        knowledgeText: "Kunskaper jag besitter.  Från HTML och CSS till JavaScript, frameworks och bibliotek. Jag har även kunskap inom backend, databashantering och sammarbete med andra kodare.",
        contactMe: "Kontakta mig",
        updateHeader: "Vad gör jag nu?",
        updateText: "I januari månad blev jag klar med min praktik på ett företag, Dise International AB där jag bland annat fick lära mig att skapa mitt eget CMS med Angular som ramverk, Typescript som frontend samt MongoDB som backend. Projektet har gett mig stor erfarenhet av hela utvecklingsprocessen, inklusive hur man integrerar säkerhetsåtgärder för att göra systemet tryggt och användarvänligt. Jag har till exempel lärt mig hur man använder token-baserad autentisering för säker åtkomst och hur man hanterar filnedladdningar till databasen på ett säkert sätt. Just nu så finslipar jag mina kunskaper med att öva Javascript samt React. Jag har även skapat en restaurang-hemsida som blev färdig i Mars 2025 och är tillgängligt här i mitt portfolio. Jag planerar även att fortsätta utbilda mig och har sökt en del kurser och utbildningar under tiden som jag finslipar på mina kunskaper. Mitt nya projekt kommer att vara en hemsida med Wordpress, därefter så kommer jag att gå tillbaka till Angular och MongoDB för ytterligare ett nytt spännande projekt."
    },
    en: {
        languageToggler: "Swedish",
        portfolioBy: "Portfolio by",
        webDeveloper: "I am a Web Developer",
        aboutMe: "About Me",
        cv: "Download CV",
        competence: "Competence",
        myProjectsText: "My Projects",
        project1Open: "See Project",
        project2Open: "See Project",
        project3Open: "See Project",
        knowledgeText: "Skills I have. From HTML and CSS to JavaScript, frameworks, and libraries. I also have knowledge in backend development, database management, and collaboration with other coders.",
        contactMe: "Contact me",
        updateHeader: "What am I doing now?",
        updateText: " In January, I completed my internship at a company called Dise International AB, where I learned how to create my own CMS using Angular as the framework, TypeScript for the frontend, and MongoDB for the backend. The project provided me with alot of experience in the entire development process, including how to integrate security measures to make the system secure and user-friendly. For example, I learned how to use token-based authentication for secure access and how to handle file downloads to the database safely.Currently, I am working on my skills by practicing JavaScript and React. I also created a restaurant website, which was completed in March 2025 and is available here in my portfolio. I also plan to continue my education and have applied for several courses and training programs while working on my skills. My next project will be a website built with WordPress, and after that, I plan to return to Angular and MongoDB for another exciting project."
    }
}

const portfolioBy = document.getElementById('portfolioBy');

const webDeveloperTitle = document.getElementById('webDeveloper');
const aboutMe = document.getElementById('aboutMe');
const cvDownload = document.getElementById('cv');
const competence = document.getElementById('competence');
const myProjectsText = document.getElementById('myProjectsText');
const project1Open = document.getElementById('project1Open');
const project2Open = document.getElementById('project2Open');
const project3Open = document.getElementById('project3Open');

const knowledgeText = document.getElementById('knowledgeText');
const contactMe = document.getElementById('contactMe');
const updateHeader = document.getElementById('nowUpdate');
const updateText = document.getElementById('textUpdate');

const togglerButton = document.querySelector('.languageTogglerButton');
let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'sv' : 'en';

    togglerButton.textContent = toggleText[currentLanguage].languageToggler;
    portfolioBy.textContent = toggleText[currentLanguage].portfolioBy;
    webDeveloperTitle.textContent = toggleText[currentLanguage].webDeveloper;
    aboutMe.textContent = toggleText[currentLanguage].aboutMe;
    cvDownload.textContent = toggleText[currentLanguage].cv;
    competence.textContent = toggleText[currentLanguage].competence;
    myProjectsText.textContent = toggleText[currentLanguage].myProjectsText;
    project1Open.textContent = toggleText[currentLanguage].project1Open;
    project2Open.textContent = toggleText[currentLanguage].project2Open;
    project3Open.textContent = toggleText[currentLanguage].project3Open;
    knowledgeText.textContent = toggleText[currentLanguage].knowledgeText;
    contactMe.textContent = toggleText[currentLanguage].contactMe;
    updateHeader.textContent = toggleText[currentLanguage].updateHeader;
    updateText.textContent = toggleText[currentLanguage].updateText;
}

function initializeLanguage() {
    switchLanguage();
}

togglerButton.addEventListener('click', switchLanguage);
initializeLanguage();

console.log(updateHeader);