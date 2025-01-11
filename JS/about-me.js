//Page 2 toggler
const toggleTextAboutMe = {
    sv: {
        languageTogglerAboutMe: "English",
        portfolioByAboutMe: "Portfolio av",
        coverLetter: "Personlight Brev",
        text1AboutMe: "Jag är en glad tjej som bor i Ängelholm som för cirka två år sedan valde att gå en annan väg i karriären. Då bestämde jag mig för att plugga inom IT! Nu, efter min utbildning så känner jag att jag har hittat rätt och tycker det är väldigt roligt samt att det alltid finns något nytt att lära sig.",
        text2AboutMe: "Jag är driven, kreativ och jag tycker om att lära mig nya saker. Utöver mina studier och arbete, har jag börjat ta kurser i olika ämnen vilket är väldigt givande. År 2021 gick jag en kurs i psykologi och år 2023, gick jag en kurs i cybersäkerhet. Jag finner IT-säkerhet väldigt intressant och ett nyttigt och bra redskap inom IT. År 2024 har jag tagit Certifikat inom Javascript och Typescript via Udemy, och även grunderna i Angular via Pluralsight.",
        text3AboutMe: "Lite kort om min karriär så har jag jobbat som dansare och danslärare efter en dansutbildning i Munchen. Inom detta område så har jag fått starka kunskaper i att jobba självständigt, mycket disciplin och kreativitet. I sökandet efter en ny passion hamnade jag på Nolato där jag bestämde mig för att stanna ett tag. Jag jobbade som maskinoperatör och lärde mig bland annat QC, Quality Control, och fick ha större ansvar för kvalitén på produkterna, skriva Certifikat och ha ett större ansvar inom produktionen på min avdelning. Nu är jag färdig med min utbildning i webbutveckling inom e-handel samt färdig med min praktik på Dise International AB och fortsätter att öva och utöka mina kunskaper på min fritid!",
        contactAboutMe: "Kontakta mig",
    },
    en: {
        languageTogglerAboutMe: "Swedish",
        portfolioByAboutMe: "Portfolio By",
        coverLetter: "Cover Letter",
        text1AboutMe: "I am a happy girl living in Ängelholm who about two years ago chose to take a different path in my career. I decided to study IT! Now, after my education, I feel that I have found my calling and find it very enjoyable, as there is always something new to learn.",
        text2AboutMe: "I am driven, creative, and I enjoy learning new things. In addition to my studies and work, I have started taking courses in various subjects, which has been very rewarding. In 2021, I took a course in psychology, and in 2023, I took a course in cybersecurity. I find IT security very interesting and a useful tool in the IT field. In 2024, I got certificates in JavaScript and TypeScript through Udemy and also the Fundamentals in Angular via Pluralsight.",
        text3AboutMe: "A little about my career: I have worked as a dancer and dance teacher after completing a dance education in Munich. In this field, I gained skills in working independently, as well as a lot of discipline and creativity. In search of a new passion, I ended up at Nolato, where I decided to stay for a while. I worked as a machine operator and learned about Quality Control (QC), where I had greater responsibility for the quality of the products, wrote certificates and took on more responsibility within the production in my department. I have now completed my education in web development with a focus on e-commerce, as well as my internship at Dise International AB. I continue to practice and expand my knowledge in my free time!",
        contactAboutMe: "Contact me",
    }
}

const portfolioByAboutMe = document.getElementById('portfolioByAboutMe');

const coverLetter = document.getElementById('coverLetter');
const text1AboutMe = document.getElementById('text1AboutMe');
const text2AboutMe = document.getElementById('text2AboutMe');
const text3AboutMe = document.getElementById('text3AboutMe');

const contactAboutMe = document.getElementById('contactAboutMe');

const togglerButtonAboutMe = document.querySelector('.languageTogglerAboutMe');
let currentLanguageAboutMe = 'en';

function switchLanguageAboutMe() {
    currentLanguageAboutMe = currentLanguageAboutMe === 'en' ? 'sv' : 'en';

    togglerButtonAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].languageTogglerAboutMe;
    portfolioByAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].portfolioByAboutMe;
    coverLetter.textContent = toggleTextAboutMe[currentLanguageAboutMe].coverLetter;
    text1AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text1AboutMe;
    text2AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text2AboutMe;
    text3AboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].text3AboutMe;
    contactAboutMe.textContent = toggleTextAboutMe[currentLanguageAboutMe].contactAboutMe;
}

togglerButtonAboutMe.addEventListener('click', switchLanguageAboutMe);
switchLanguageAboutMe();