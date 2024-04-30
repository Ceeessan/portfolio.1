const project = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');

const btnCloseProjectWindow1 = document.querySelector('.close-project1');
const btnCloseProjectWindow2 = document.querySelector('.close-project2');
const btnCloseProjectWindow3 = document.querySelector('.close-project3');
const btnCloseProjectWindow4 = document.querySelector('.close-project4');


const btnShowProjectWindow = document.querySelectorAll('.show-project');

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



window.addEventListener('scroll', function () {

    const knowledgeContainer = document.querySelector('.knowledge-container');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 250 || window.innerWidth <= 600) {
        knowledgeContainer.classList.add('show');
    } else {
        knowledgeContainer.classList.remove('show');
    }
});

// Scroll to Knowledge I have
const btnScrollTo = document.querySelector('.my-knowledge');
const knowledgeSection = document.querySelector('.coding-text');

btnScrollTo.addEventListener('click', function (e) {
    const knowledgeCoords = knowledgeSection.getBoundingClientRect();

    window.scrollTo({
        left: knowledgeCoords.left + window.pageXOffset,
        top: knowledgeCoords.top + window.pageYOffset,
        behavior: 'smooth'
    })
})