gsap.from(".section", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out"
});

const tabLinks = document.querySelectorAll('.tab-link');
const tabPanels = document.querySelectorAll('.tab-panel');

tabPanels[0].classList.add('active');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.dataset.tab;

        tabLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');

        tabPanels.forEach(panel => {
            if (panel.id === targetId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    })
})

//Page 2 toggler
const toggleTextAboutMe = {
    sv: {
        languageTogglerAboutMe: "English",
        portfolioByAboutMe: "Portfolio av",
        coverLetter: "Personlight Brev",
        nameInfo: "Namn: Cecilia Carlsen",
        jobInfo: "Jobb: Maskinoperatör",
        livingInfo: "Boende: Munka-Ljungby",
        internshipInfo: "Praktik: Dise",
        educationTabMenu: "Utbildning",
        courseTabMenu: "Kurser",
        afterEducationTabMenu: "Efter utbildning",
        backgroundTabMenu: "Bakgrund",
        header1AboutMe:
            "Min utbildning",
        text1AboutMe:
            "För ett par år sedan valde att gå en annan väg i karriären och bestämde mig för att plugga inom IT! Jag utbildade mig i Webbutveckling inriktning E-handel. Under sista halvåret på min utbildning så gjorde jag min praktik på Dise International AB. Under praktiken byggde jag bland annat ett eget CMS med Angular, Typescript, Node.js, Express och MongoDB. Projektet gav mig en stor erfarenhet av hela utvecklingsprocessen. Bland annat fick jag implementera autentisering med JWT-tokens samt hantera filnedladdningar till databasen på ett säkert sätt. ",
        takenCourseH4:
            "Kurser jag tagit",
        coursesFromEducation:
            "Kurser från min utbildning",
        coursesFromAntagning:
            "Kurser från Antagning.se",
        coursesWithCert:
            "Kurser med Certifikat",
        courseNow:
            "Nuvarande Kurs",
        text2AboutMe:
            "Efter min utbildning har jag skapat några projekt som man bland annat kan hitta här i mitt portfolio, men även på min github. Jag har tagit några extra kurser utöver mitt vanliga jobb där jag har finslipat mina kunskaper men också lärt mig nytt. Jag har även fått möjligheten att jobba med föreningen Munskänkarna där jag just nu analyserar hemsidan för att få fram användarflödet. Vidare kommer vi att implementera förbättringar på sidan som kommer att bli ett projekt för 2026.",
        header3AboutMe:
            "Efter min utbildning",
        text3AboutMe:
            "Lite kort om min karriär så har jag jobbat som dansare och danslärare efter en dansutbildning i Munchen. Inom detta område så har jag fått starka kunskaper i att jobba självständigt, mycket disciplin och kreativitet. I sökandet efter en ny passion så hamnade jag på Nolato. Jag jobbar som maskinoperatör och har hand om bland annat QC, Quality Control, och får ha ett större ansvar för kvalitén på produkterna och skriva Certifikat, bland annat.",
        header4AboutMe:
            "Bakgrund",
        contactAboutMe: "Kontakta mig",
    },
    en: {
        languageTogglerAboutMe: "Swedish",
        portfolioByAboutMe: "Portfolio By",
        coverLetter: "Cover Letter",
        nameInfo: "Name: Cecilia Carlsen",
        jobInfo: "Job: Machine Operator",
        livingInfo: "Living: Munka-Ljungby",
        internshipInfo: "Internship: Dise",
        educationTabMenu: "Education",
        courseTabMenu: "Courses",
        afterEducationTabMenu: "After education",
        backgroundTabMenu: "Background",
        header1AboutMe:
            "My Education",
        text1AboutMe:
            "A few years ago, I decided to take a different path in my career and chose to study IT. I completed a Web Development program with a focus on E-commerce. During the last six months of my studies, I did my internship at Dise International AB. During the internship, I built, among other things, my own CMS using Angular, TypeScript, Node.js, Express, and MongoDB. The project gave me extensive experience in the entire development process, including implementing authentication with JWT tokens and securely handling file uploads to the database.",
        takenCourseH4:
            "Courses Completed",
        coursesFromEducation:
            "Courses From Education(In Swedish)",
        coursesFromAntagning:
            "Courses from Antagning.se (In Swedish)",
        coursesWithCert:
            "Courses with Certificate",
        courseNow:
            "Current Course (In Swedish)",
        text2AboutMe:
            "After completing my education, I have created several projects, which can be found here in my portfolio as well as on my GitHub. I have also taken additional courses alongside my regular work, which have allowed me to refine my skills and learn new ones. I have had the opportunity to work with the Munskänkarna association, where I am currently analyzing their website to understand user flows. Moving forward, we will implement improvements to the site, which will be a project for 2026.",
        header3AboutMe:
            "After my Education",
        text3AboutMe:
            "I have worked as a dancer and dance instructor after completing a dance education in Munich. In this field, I developed strong skills in working independently, discipline, and creativity. In search of a new passion, I joined Nolato, where I now work as a machine operator. My responsibilities include quality control (QC) and taking on greater responsibility for product quality, including writing certificates.",
        header4AboutMe:
            "Background",
        contactAboutMe: "Contact me",
    }
}

const portfolioByAboutMe = document.getElementById('portfolioByAboutMe');
const coverLetter = document.getElementById('coverLetter');
const nameInfo = document.getElementById('nameInfo');
const jobInfo = document.getElementById('jobInfo');
const livingInfo = document.getElementById('livingInfo');
const internshipInfo = document.getElementById('internshipInfo');
const educationTabMenu = document.getElementById('educationTabMenu');
const courseTabMenu = document.getElementById('courseTabMenu');
const afterEducationTabMenu = document.getElementById('afterEducationTabMenu');
const backgroundTabMenu = document.getElementById('backgroundTabMenu');
const header1AboutMe = document.getElementById('header1AboutMe');
const text1AboutMe = document.getElementById('text1AboutMe');
const takenCourseH4 = document.getElementById('takenCourseH4');
const coursesFromEducation = document.getElementById('coursesFromEducation');
const coursesFromAntagning = document.getElementById('coursesFromAntagning');
const coursesWithCert = document.getElementById('coursesWithCert');
const courseNow = document.getElementById('courseNow');
const text2AboutMe = document.getElementById('text2AboutMe');
const header3AboutMe = document.getElementById('header3AboutMe');
const text3AboutMe = document.getElementById('text3AboutMe');
const header4AboutMe = document.getElementById('header4AboutMe');
const contactAboutMe = document.getElementById('contactAboutMe');

const togglerButtonAboutMe = document.querySelector('.languageTogglerAboutMe');
let currentLanguageAboutMe = 'en';

function switchLanguageAboutMe() {
    currentLanguageAboutMe = currentLanguageAboutMe === 'en' ? 'sv' : 'en';

    togglerButtonAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].languageTogglerAboutMe;
    portfolioByAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].portfolioByAboutMe;
    coverLetter.textContent = toggleTextAboutMe[currentLanguageAboutMe].coverLetter;
    nameInfo.textContent = toggleTextAboutMe[currentLanguageAboutMe].nameInfo;
    jobInfo.textContent = toggleTextAboutMe[currentLanguageAboutMe].jobInfo;
    livingInfo.textContent = toggleTextAboutMe[currentLanguageAboutMe].livingInfo;
    internshipInfo.textContent = toggleTextAboutMe[currentLanguageAboutMe].internshipInfo;
    educationTabMenu.textContent = toggleTextAboutMe[currentLanguageAboutMe].educationTabMenu;
    courseTabMenu.textContent = toggleTextAboutMe[currentLanguageAboutMe].courseTabMenu;
    afterEducationTabMenu.textContent = toggleTextAboutMe[currentLanguageAboutMe].afterEducationTabMenu;
    backgroundTabMenu.textContent = toggleTextAboutMe[currentLanguageAboutMe].backgroundTabMenu;
    header1AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].header1AboutMe;
    text1AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text1AboutMe;
    takenCourseH4.textContent = toggleTextAboutMe[currentLanguageAboutMe].takenCourseH4;
    coursesFromEducation.textContent = toggleTextAboutMe[currentLanguageAboutMe].coursesFromEducation;
    coursesFromAntagning.textContent = toggleTextAboutMe[currentLanguageAboutMe].coursesFromAntagning;
    coursesWithCert.textContent = toggleTextAboutMe[currentLanguageAboutMe].coursesWithCert;
    courseNow.textContent = toggleTextAboutMe[currentLanguageAboutMe].courseNow;
    text2AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text2AboutMe;
    header3AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].header3AboutMe;
    text3AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text3AboutMe;
    header4AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].header4AboutMe;
    contactAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].contactAboutMe;
}

togglerButtonAboutMe.addEventListener('click', switchLanguageAboutMe);
switchLanguageAboutMe();