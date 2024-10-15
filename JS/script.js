const menuBar = document.getElementById('menuBarId');
const menuContent = document.querySelector('.menuBar');
const sideMenu = document.querySelector(".side-menu");

const project = document.querySelectorAll('.project');
const btnShowProjectWindow = document.querySelectorAll('.show-project');
const allSections = document.querySelectorAll('.section');

const overlay = document.querySelector('.overlay');
const btnCloseProjectWindow1 = document.querySelector('.close-project1');
const btnCloseProjectWindow2 = document.querySelector('.close-project2');
const btnCloseProjectWindow3 = document.querySelector('.close-project3');
const btnCloseProjectWindow4 = document.querySelector('.close-project4');

const activateMenuBar = function () {
    menuBar.classList.toggle("change");
    sideMenu.classList.toggle("active");
}
menuBar.addEventListener('click', activateMenuBar);

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
const btnScrollTo = document.querySelector('.my-knowledge');
const knowledgeSection = document.querySelector('.coding-text');

btnScrollTo.addEventListener('click', function (e) {
    const knowledgeCoords = knowledgeSection.getBoundingClientRect();

    window.scrollTo({
        left: knowledgeCoords.left + window.pageXOffset,
        top: knowledgeCoords.top + window.pageYOffset,
        behavior: 'smooth'
    });
});

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
        project1Open: "Öppna Projekt",
        project2Open: "Öppna Projekt",
        project3Desc: "Ett projekt där vi nyttjat oss av API:er.",
        project3Open: "Öppna Projekt",
        project4Name: "WordPress - Sammarbete med annan utvecklare",
        project4Desc: "Tyvärr är detta projekt inte tillgänligligt online men projektet ligger ute på mitt github.",
        knowledgeText: "Kunskaper jag besitter.  Från HTML och CSS till JavaScript, frameworks och bibliotek. Jag har även kunskap inom backend, databashantering och sammarbete med andra kodare.",
        contactMe: "Kontakta mig"
    },
    en: {
        languageToggler: "Swedish",
        portfolioBy: "Portfolio by",
        webDeveloper: "I am a Web Developer",
        aboutMe: "About Me",
        cv: "Download CV",
        competence: "Competence",
        myProjectsText: "My Projects",
        project1Open: "Open Project",
        project2Open: "Open Project",
        project3Desc: "A project where we used APIs.",
        oroject3Open: "Open Project",
        project4Name: "Collaboration with another developer on WordPress project",
        project4Desc: "Unfortunately, this project is not available online, but the project is hosted on my GitHub.",
        knowledgeText: "Skills I have. From HTML and CSS to JavaScript, frameworks, and libraries. I also have knowledge in backend development, database management, and collaboration with other coders.",
        contactMe: "Contact me"
    }
}

const portfolioBy = document.querySelector('.portfolioByClass');

const webDeveloperTitle = document.getElementById('webDeveloper');
const aboutMe = document.getElementById('aboutMe');
const cvDownload = document.getElementById('cv');
const competence = document.getElementById('competence');
const myProjectsText = document.getElementById('myProjectsText');
const project1Open = document.getElementById('project1Open');
const project2Open = document.getElementById('project2Open');
const project3Desc = document.getElementById('project3Desc');
const project3Open = document.getElementById('project3Open');
const project4Name = document.getElementById('project4Name');
const project4Desc = document.getElementById('project4Desc');
const knowledgeText = document.getElementById('knowledgeText');
const contactMe = document.getElementById('contactMe');

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
    project3Desc.textContent = toggleText[currentLanguage].project3Desc;
    project3Open.textContent = toggleText[currentLanguage].project3Open;
    project4Name.textContent = toggleText[currentLanguage].project4Name;
    project4Desc.textContent = toggleText[currentLanguage].project4Desc;
    knowledgeText.textContent = toggleText[currentLanguage].knowledgeText;
    contactMe.textContent = toggleText[currentLanguage].contactMe;
}

function initializeLanguage() {
    switchLanguage();
}

togglerButton.addEventListener('click', switchLanguage);
initializeLanguage();