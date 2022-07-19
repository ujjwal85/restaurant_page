
function about(){
    const div = document.createElement('div');
    div.classList.add('about');

    const h3 = document.createElement('h3');
    h3.textContent='Información';

    const p = document.createElement('p');
    p.textContent = 'Let’s use what we’ve learned and take a chance to continue practicing DOM manipulation by dynamically rendering a simple restaurant homepage! By the end, we are going to be using JavaScript alone to generate the entire contents of the website! ';

    div.appendChild(h3);
    div.appendChild(p);
    return div;
}

function loadAbout(){
    const main = document.getElementById('main');
    main.textContent=''
    main.appendChild(about());
}

export default loadAbout;