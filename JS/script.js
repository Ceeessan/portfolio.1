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
        webDeveloperText: "Jag är webbutvecklare med fokus på fullstack-utveckling för moderna och användarvänliga webbapplikationer.",
        aboutMe: "Om mig",
        cv: "Ladda ner CV",
        competence: "Kompetens",
        myProjectsText: "Mina Projekt",
        project1Open: "Se projektet",
        project2Open: "Se projektet",
        project3Open: "Se projektet",
        knowledgeText: "Jag har erfarenhet av att utveckla webbapplikationer från grunden, både med frontend och backend. Jag arbetar med moderna tekniker som HTML, CSS, JavaScript och TypeScript samt ramverk som Angular och React. På backend-sidan har jag använt Node.js och Express i kombination med databaser som MongoDB. Jag är van att arbeta med Git och GitHub och har dessutom erfarenhet av WordPress samt Woocommerce.",
        contactMe: "Kontakta mig",
        updateHeader: "Vad gör jag nu?",
        updateText1: "I januari 2025 avslutade jag min utbildning, samt min praktik som jag gjorde på Dise International AB. Under praktiken fick jag bland annat bygga ett eget CMS med Angular, Typescript samt Express.js och MongoDB. Projektet gav mig en stor erfarenhet av hela utvecklingsprocessen, till exempel så lärde jag mig att implementera autentisering med JWT och hur man hanterar filnedladdningar till databasen på ett säkert sätt.",
        updateText2: "Efter utbildningen skapade jag en restauranghemsida som blev färdig i Mars 2025 och finns tillgängligt här i mitt portfolio.Just nu bygger jag ett större projekt med Angular, MongoDB Atlas och Express.js som kommer att publiceras här så småningom. Jag planerar även att fortsätta utbilda mig och har sökt flera kurser undertiden som jag fördjupar mina kunskaper."
    },
    en: {
        languageToggler: "Swedish",
        portfolioBy: "Portfolio by",
        webDeveloper: "I am a Web Developer",
        webDeveloperText: "I am a web developer focused on fullstack development of modern and user-friendly web applications.",
        aboutMe: "About Me",
        cv: "Download CV",
        competence: "Competence",
        myProjectsText: "My Projects",
        project1Open: "See Project",
        project2Open: "See Project",
        project3Open: "See Project",
        knowledgeText: "I have experience developing web applications from scratch, both on the frontend and backend. I work with modern technologies such as HTML, CSS, JavaScript, and TypeScript, as well as frameworks like Angular and React. On the backend, I have used Node.js and Express in combination with databases like MongoDB. I’m comfortable working with Git and GitHub, and I also have experience with WordPress and WooCommerce.",
        contactMe: "Contact me",
        updateHeader: "What am I doing now?",
        updateText1: "In January 2025, I completed my education, along with an internship that I did at Dise International AB. During the internship, I had the opportunity to build my own CMS using Angular, TypeScript, Express.js, and MongoDB. The project gave me valuable experience in the entire development process, for example, I learned how to implement authentication using JWT and how to securely handle file uploads to the database.",
        updateText2: "After completing my education, I created a restaurant website, which was finished in March 2025 and is available here in my portfolio. I am currently working on a larger project using Angular, MongoDB Atlas, and Express.js, which will be published here shortly. I also plan to continue my education and have applied to several courses while deepening my skills."
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

const knowledgeText = document.getElementById('knowledgeText');
const contactMe = document.getElementById('contactMe');
const updateHeader = document.getElementById('nowUpdate');
const updateText1 = document.getElementById('textUpdate1');
const updateText2 = document.getElementById('textUpdate2');

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
    knowledgeText.textContent = toggleText[currentLanguage].knowledgeText;
    contactMe.textContent = toggleText[currentLanguage].contactMe;
    updateHeader.textContent = toggleText[currentLanguage].updateHeader;
    updateText1.textContent = toggleText[currentLanguage].updateText1;
    updateText2.textContent = toggleText[currentLanguage].updateText2;

}

function initializeLanguage() {
    switchLanguage();
}

togglerButton.addEventListener('click', switchLanguage);
initializeLanguage();

console.log(updateHeader);