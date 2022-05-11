const projects = [
    {
        id: '0',
        name: 'Christ Model Academy',
        live_version: 'http://christmodel.academy',
        description: 'A School Website build for Christ model Academy.  ',
        featured_image: 'images/projects/3.png',
        source: 'https://github.com/learnwithalfred',
        technologies: ['Laravel', 'PHP', 'HTML', 'JavaScript'],
    },
    {
        id: '1',
        name: 'Aura Geospatial Website',
        description:
            'A website build for a Drones Spraying Company. I build this website on freelance.  ',
        featured_image: 'images/projects/1.png',
        live_version: 'https://aurageospatial.com',
        source: 'https://github.com/learnwithalfred',
        technologies: ['HTML', 'React', 'JavaScript'],
    },

    {
        id: '2',
        name: 'babylontruckingllc website',
        featured_image: 'images/projects/2.png',
        description: 'A freelance project built for babylon logistics company. ',
        live_version: 'https://www.babylontruckingllc.com',
        source: 'https://github.com/learnwithalfred',
        technologies: ['HTML', 'React', 'JavaScript'],
    },
];

const dynamic = document.querySelector('.card-container');

for (let i = 0; i < projects.length; i += 1) {
    const fetch = document.querySelector('.card-container').innerHTML;

    const imageNum = i % 2 === 0 ? 'fourth_img' : 'third_img';
    const cardNum = i % 2 === 0 ? 'fourth__card' : 'third__card';

    dynamic.innerHTML = ` 
      <div class="card">
              <div class="project_container ${cardNum}">
                <div class="card__image ${imageNum}">
                  <img
           class="project-image"
           src="${projects[i].featured_image}"
           alt="${projects[i].name}"
           title="${projects[i].name}"
         />
                </div>
                <div class="projects">
                  <div class="third__project">
                    <h2 class="projects__header">${projects[i].name}</h2>
                    <p class="projects-text">
                      ${projects[i].description}
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
                  <div class="projects__btn">
                    <button id='${projects[i].id}' type="button" class="btn" data-modal-target="#modal">See Projects</button>
                  </div>
                </div>
              </div>
            </div>
  ${fetch}`;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const modalContent = document.querySelector('.modalData');

const openModal = (modal) => {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
};

const closeModal = (modal) => {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
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
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
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