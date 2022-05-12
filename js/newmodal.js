

// dynamic starts here 
const projects = [
  {

    id: '0',
    name: 'Ecommece website',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle21.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  },
  {
    id: '1',
    name: 'Portfolio project',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle212.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  },
  {
    id: '2',
    name: 'Shopping Site',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle213.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['JavaScript', 'Git', 'CSS', 'HTML',]
  },
  {
    id: '3',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle214.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'HTML', 'CSS', 'JavaScript']

  },
  {
    id: '4',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle215.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['CSS', 'Git', 'HTML', 'JavaScript']
  },
  {
    id: '5',
    name: 'Project name goes here',
    live_version: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis doloribus similique illum est, accusamus deleniti expedita hic id itaque nostrum sint. Et magnam saepe dolorem pariatur labo',
    featured_image: 'assert/Rectangle211.png',
    featured_image2: 'assert/Group109.png',
    arrow_img: "assert/ic_arrow_right.png",
    source: 'https://github.com/HeDevedUp/MicroversePortfolioProject',
    technologies: ['Git', 'CSS', 'HTML', 'JavaScript']
  },

]

const dynamicData = document.querySelector('.section2');
for (let a = 0; a < projects.length; a++) {
  const getClass = document.querySelector('.section2').innerHTML;

  const imageindex = projects[a].id;
  const cardindex = projects[a].id;



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
      <p class="project-info-modal">${projects[foundIndex].name}</p>
      <div class="projects__languages">
      <ul class="projects__languages--list">
                           <li class='projects__languages--first'>HTML </li>
                <li class='projects__languages--first'>CSS </li>
                <li class='projects__languages--first'>JavaScript </li>
                <li class='projects__languages--first'>Rails </li>
      </ul>
    </div>
         
        <img
          class="modal-img"
          src=" ${projects[foundIndex].featured_image2}"
          alt="${projects[foundIndex].name}"
          title="${projects[foundIndex].name}"
        />
        <div class="modal-text">
          <p>
            ${projects[foundIndex].description}
          </p>
        </div>

       
        <div class="btn-container">
          <a href="${projects[foundIndex].live_version}" type="button" class="modal-btn">
            See Live Link <img src="/assert/ic_link.svg" alt="Icon" title="Img" class="modal-icon">
          </a>
          <a href="${projects[foundIndex].source}" type="button" class="modal-btn">
            See Source Code
            <img src="/assert/Group.png" alt="Icon" title="Img" class="modal-icon">
          </a>
        </div>
        <div class="modal_last_button">
        <ul class="modal_arrow_right">
            <li><a href="">next page</a></li>
            <li><a href="">prevous page</a></li </ul>
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




