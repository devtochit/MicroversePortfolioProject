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

const dynamic = document.querySelector('.section2');
for (let a = 0; a < projects.length; a++) {
    console.log(projects[a].name)
    const fetch = document.querySelector('.section2').innerHTML;

    const imageNum = a % 2 === 0 ? 'fourth_img' : 'third_img';
    const cardNum = a % 2 === 0 ? 'fourth__card' : 'third__card';

    dynamic.innerHTML = ` 
    <div class="project-container" ${cardNum}>
    <img
    ${imageNum}
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
        <button type="button" class="btn button-with-arrow">
            See this project
            <img
            loading="lazy"
             src="${projects[a].arrow_img}"/>
        </button>
    </div>
    </div>
  ${fetch}`
}


















