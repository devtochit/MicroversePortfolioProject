

// dynamic starts here 
const projects = [
  {

    id: '0',
    name: 'Ecommece website',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle21.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  },
  {
    id: '1',
    name: 'Portfolio project',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle212.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  },
  {
    id: '2',
    name: 'Shopping Site',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle213.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['JavaScript', 'Git', 'CSS', 'HTML',]
  },
  {
    id: '3',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle214.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'HTML', 'CSS', 'JavaScript']

  },
  {
    id: '3',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle215.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['CSS', 'Git', 'HTML', 'JavaScript']
  },
  {
    id: '4',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'A portfolio website .  ',
    featured_image: 'assert/Rectangle211.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  }
]

const dynamicData = document.querySelector('.section2');
for (let a = 0; a < projects.length; a += 1) {
  console.log(projects[a].name)
  const getClass = document.querySelector('.section2').innerHTML;

  const imageindex = a % 2 === 0 ? '' : 'third_img';
  const cardindex = a % 2 === 0 ? 'fourth__card' : 'third__card';;

  dynamicData.innerHTML = ` 
    <div class="project-container" ${cardindex}>
    <img
    ${imageindex}
     class="project-image" 
     loading="lazy"
    alt="${projects[a].name}" 
    src="${projects[a].featured_image}"
    />
    <div class="project-info">
        <p class="project-info-name">${projects[a].name}</p>
        <ul class="project-languages">
            <li>HTML/CSS</li>
            <li>Ruby on Rails</li>
            <li>Javascript</li>
        </ul>
        <button ${projects[a].id} type="button" class="btn button-with-arrow"  data-modal-target="#modal">
            See this project
            <img
            loading="lazy"
             src="${projects[a].arrow_img}"/>
        </button>
    </div>
    </div>
  ${getClass}`
}
/// ends here 

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlayy = document.getElementById('overlayy');
const modalContent = document.querySelector('.modalData');

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlayy.classList.add('active');
};

const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlayy.classList.remove('active');
};

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const foundIndex = Array.from(openModalButtons).indexOf(e.target);
    modalContent.innerHTML = `
      <div class="modal-body">
        <img
          class="modal-img"
          src=" ${projects[foundIndex].featured_image}"
          alt="${projects[foundIndex].name}"
          title="${projects[foundIndex].name}"
        />
        <div class="modal-text">
          <p>
            ${projects[foundIndex].description}
          </p>
        </div>

        <div class="projects__languages">
          <ul class="projects__languages--list">
                               <li class='projects__languages--first'>HTML </li>
                    <li class='projects__languages--first'>CSS </li>
                    <li class='projects__languages--first'>JavaScript </li>
                    <li class='projects__languages--first'>Rails </li>
          </ul>
        </div>
        <div class="btn-container">
          <a href="${projects[foundIndex].live_version}" type="button" class="modal-btn">
            See Live Link <img src="/images/Icon.png" alt="Icon" title="Img" class="modal-icon">
          </a>
          <a href="${projects[foundIndex].source}" type="button" class="modal-btn">
            See Source Code
            <i class="fa fa-github modal-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>`;
    openModal(modal);
  });
});

overlayy.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});




