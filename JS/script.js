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
    const offset = 900;

    window.scrollTo({
        left: knowledgeCoords.left + window.pageXOffset,
        top: knowledgeCoords.top + window.pageYOffset - offset,
        behavior: 'smooth'
    });
});

btnScrollTo.addEventListener('click', closeMenuBar);

//Page 1 Toggler
const toggleText = {
    sv: {
        languageToggler: "In English",
        portfolioBy: "Portfolio av",
        webDeveloper: "Jag är Frontendutvecklare",
        webDeveloperText: "...med fokus på kvalitet och struktur",
        aboutMe: "Om mig →",
        cv: "Ladda ner CV",
        competence: "Kompetens",
        myProjectsText: "Mina Projekt",
        myProjectsExp: "Ett urval av projekt jag byggt — klicka på ett kort för mer info",
        // project1Open: "Se projektet →",
        project2Open: "Se projektet →",
        project3Open: "Se projektet →",
        project4Open: "Se projektet →",

        experience: "Erfarenhet",
        experienceText: "Utöver mina egna projekt så har jag fått använda min kompetens i verkliga livet.",
        internshipHeader: "Praktik på Dise International AB",
        internshipText: "Byggde ett digital signage-CMS från grunden med inloggning, JWT-autentisering och filhantering. Hjälpte även till med interna rutiner och företagets hemsida.",

        analyticHeader: "Digitalanalys för Munskänkarna",
        analyticText: "Analyserade föreningens webbtrafik med GA4 och Matomo som underlag för en kommande uppdatering av sidan.",

        analyticCourseHeader: "YH-kurs i Digital Analys",
        analyticCourseText: "Fördjupade mig i datakvalitet och GDPR-anpassning för att komplettera min tekniska kompetens.",


        knowledgeText: "Verktyg jag jobbar mest med:",
        contactMe: "Kontakta mig",
    },
    en: {
        languageToggler: "In Swedish",
        portfolioBy: "Portfolio by",
        webDeveloper: "I am a Frontend developer",
        webDeveloperText: "...with a focus on quality and structure",
        aboutMe: "About me →",
        cv: "Download CV",
        competence: "Competence",
        myProjectsText: "My Projects",
        myProjectsExp: "A selection of projects I've built — click a card for more info",
        // project2Open: "See Project →",
        project2Open: "See Project →",
        project3Open: "See Project →",
        project4Open: "See Project →",

        experience: "Experience",
        experienceText: "Beyond my own projects, I've had the opportunity to use my skills in real-world settings.",
        internshipHeader: "Internship at Dise International AB",
        internshipText: "Built a digital signage CMS from scratch with login, JWT authentication, and file handling. Also helped with internal routines and the company website.",

        analyticHeader: "Digital Analytics for Munskänkarna",
        analyticText: "Analyzed the association's website traffic with GA4 and Matomo as a basis for an upcoming site update.",

        analyticCourseHeader: "Vocational Course in Digital Analytics",
        analyticCourseText: "Deepened my knowledge of data quality and GDPR compliance to complement my technical skills.",

        knowledgeText: "Tools I work with:",
        contactMe: "Contact me",
    }
}

const portfolioBy = document.getElementById('portfolioBy');

const webDeveloperTitle = document.getElementById('webDeveloper');
const webDeveloperText = document.getElementById('webDeveloperText');
const aboutMe = document.getElementById('aboutMe');
const cvDownload = document.getElementById('cv');
const competence = document.getElementById('competence');
const myProjectsText = document.getElementById('myProjectsText');
const myProjectsExp = document.getElementById('myProjectsExp');
// const project1Open = document.getElementById('project1Open');
const project2Open = document.getElementById('project2Open');
const project3Open = document.getElementById('project3Open');
const project4Open = document.getElementById('project4Open');

const experience = document.getElementById('experience');
const experienceText = document.getElementById('experienceText');
const internshipHeader = document.getElementById('internshipHeader');
const internshipText = document.getElementById('internshipText');
const analyticHeader = document.getElementById('analyticHeader');
const analyticText = document.getElementById('analyticText');
const analyticCourseHeader = document.getElementById('analyticCourseHeader');
const analyticCourseText = document.getElementById('analyticCourseText');

const knowledgeText = document.getElementById('knowledgeText');
const contactMe = document.getElementById('contactMe');


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
    myProjectsExp.textContent = toggleText[currentLanguage].myProjectsExp;
    // project1Open.textContent = toggleText[currentLanguage].project1Open;
    project2Open.textContent = toggleText[currentLanguage].project2Open;
    project3Open.textContent = toggleText[currentLanguage].project3Open;
    project4Open.textContent = toggleText[currentLanguage].project4Open;

    experience.textContent = toggleText[currentLanguage].experience;
    experienceText.textContent = toggleText[currentLanguage].experienceText;
    internshipHeader.textContent = toggleText[currentLanguage].internshipHeader;
    internshipText.textContent = toggleText[currentLanguage].internshipText;
    analyticHeader.textContent = toggleText[currentLanguage].analyticHeader;
    analyticText.textContent = toggleText[currentLanguage].analyticText;

    analyticCourseHeader.textContent = toggleText[currentLanguage].analyticCourseHeader;
    analyticCourseText.textContent = toggleText[currentLanguage].analyticCourseText;



    knowledgeText.textContent = toggleText[currentLanguage].knowledgeText;
    contactMe.textContent = toggleText[currentLanguage].contactMe;
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