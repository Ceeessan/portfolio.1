gsap.from(".section", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out"
});

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
    if (window.innerWidth <= 610) {
        menuBar.classList.remove("change");
        sideMenu.classList.remove("active");
        sideMenu.style.display = 'none';
    }
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
btnCloseProjectWindow2.addEventListener('click', closeProject);
btnCloseProjectWindow3.addEventListener('click', closeProject);
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

// Scroll to Knowledge-container
btnScrollTo.addEventListener('click', function () {
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
        webDeveloper: "Jag är Webbutvecklare...",
        webDeveloperText: "med fokus på fullstack-utveckling och starkt intresse för webbanalys och datadriven utveckling!",
        aboutMe: "Om mig",
        cv: "Ladda ner CV",
        competence: "Kompetens",
        myProjectsText: "Mina Projekt",
        project1Open: "Se projektet",
        project2Open: "Se projektet",
        project3Open: "Se projektet",
        learningAnalysisText1: "Under 2025 började jag arbeta med föreningen Munskänkarna, där fick jag i uppdrag att analysera trafiken på deras webbplats med verktygen Google Analytics 4 (GA4) och Matomo. Intresset för digital analys har växt och jag fördjupar mina kunskaper med en fem-månaders YH-utbildning inom digital analys.",
        learningAnalysisText2: "Under min utbildning arbetar jag med att samla in och analysera KPI:er för att optimera webbtrafik och fatta datadrivna beslut. Jag säkerställer korrekt datainsamling och GDPR-anpassning. För detta använder jag viktiga verktyg såsom:",
        knowledgeText: "Jag har erfarenhet av att utveckla webbapplikationer från grunden, både med frontend och backend. Jag arbetar med moderna tekniker som HTML, CSS, JavaScript och TypeScript samt ramverk som Angular och React. På backend-sidan har jag använt Node.js och Express i kombination med databaser som MongoDB. Jag är van att arbeta med Git och GitHub.",
        contactMe: "Kontakta mig",
        updateHeader: "Vad gör jag nu?",
        updateText1: "Just nu jobbar jag på att utveckla min kompetens inom digital analys för att kombinera detta med min tekniska kompetens. Utöver min utbildning har jag haft möjlighet att hjälpa föreningen Munskänkarna, där jag har bidragit till att analysera deras trafik.",
    },
    en: {
        languageToggler: "Swedish",
        portfolioBy: "Portfolio by",
        webDeveloper: "I am a Web Developer...",
        webDeveloperText: "focused on full-stack development, with a strong interest in web analytics and data-driven development!",
        aboutMe: "About Me",
        cv: "Download CV",
        competence: "Competence",
        myProjectsText: "My Projects",
        project1Open: "See Project",
        project2Open: "See Project",
        project3Open: "See Project",
        learningAnalysisText1: "In 2025, I started working with the association Munskänkarna, where I was tasked with analyzing their website traffic using Google Analytics 4 (GA4) and Matomo. My interest in digital analytics grew, and I am further developing my skills through a five-month vocational education in web analysis.",
        learningAnalysisText2: "During my education, I work on collecting and analyzing KPIs to optimize website traffic and make data-driven decisions. I ensure proper data collection and GDPR compliance. For this, I use key tools such as:",
        knowledgeText: "I have experience developing web applications from scratch, both on the frontend and backend. I work with modern technologies such as HTML, CSS, JavaScript, and TypeScript, as well as frameworks like Angular and React. On the backend, I have used Node.js and Express in combination with databases like MongoDB. I’m comfortable working with Git and GitHub.",
        contactMe: "Contact me",
        updateHeader: "What am I doing now?",
        updateText1: "At the moment, I am developing my skills in digital analytics to combine them with my technical expertise. In addition to my education, I have had the opportunity to support the association Munskänkarna, where I contributed to analyzing their website traffic.",
    }
}

const portfolioBy = document.getElementById('portfolioBy');

const webDeveloperTitle = document.getElementById('webDeveloper');
const webDeveloperText = document.getElementById('webDeveloperText');
const aboutMe = document.getElementById('aboutMe');
const cvDownload = document.getElementById('cv');
const competence = document.getElementById('competence');
const myProjectsText = document.getElementById('myProjectsText');
const project1Open = document.getElementById('project1Open');
const project2Open = document.getElementById('project2Open');
const project3Open = document.getElementById('project3Open');
const learningAnalysisText1 = document.getElementById('learningAnalysisText1');
const learningAnalysisText2 = document.getElementById('learningAnalysisText2');
const knowledgeText = document.getElementById('knowledgeText');
const contactMe = document.getElementById('contactMe');
const updateHeader = document.getElementById('nowUpdate');
const updateText1 = document.getElementById('textUpdate1');


const togglerButton = document.querySelector('.languageTogglerButton');
let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'sv' : 'en';

    togglerButton.textContent = toggleText[currentLanguage].languageToggler;
    portfolioBy.textContent = toggleText[currentLanguage].portfolioBy;
    webDeveloperTitle.textContent = toggleText[currentLanguage].webDeveloper;
    webDeveloperText.textContent = toggleText[currentLanguage].webDeveloperText;
    aboutMe.textContent = toggleText[currentLanguage].aboutMe;
    cvDownload.textContent = toggleText[currentLanguage].cv;
    competence.textContent = toggleText[currentLanguage].competence;
    myProjectsText.textContent = toggleText[currentLanguage].myProjectsText;
    project1Open.textContent = toggleText[currentLanguage].project1Open;
    project2Open.textContent = toggleText[currentLanguage].project2Open;
    project3Open.textContent = toggleText[currentLanguage].project3Open;
    learningAnalysisText1.textContent = toggleText[currentLanguage].learningAnalysisText1;
    learningAnalysisText2.textContent = toggleText[currentLanguage].learningAnalysisText2;
    knowledgeText.textContent = toggleText[currentLanguage].knowledgeText;
    contactMe.textContent = toggleText[currentLanguage].contactMe;
    updateHeader.textContent = toggleText[currentLanguage].updateHeader;
    updateText1.textContent = toggleText[currentLanguage].updateText1;
}

function initializeLanguage() {
    switchLanguage();
}

togglerButton.addEventListener('click', function () {
    switchLanguage();

    if (window.matchMedia('(max-width: 610px)').matches) {
        closeMenuBar();
    }
});
initializeLanguage();