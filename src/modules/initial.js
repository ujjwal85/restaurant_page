import loadHome from "./home";
import loadContent from "./content";
import loadAbout from "./about";


function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class="title">
            <h1>TwistKichen</h1>
            <i class="fas fa-pizza-slice"></i>
        </div>
    `
    const nav = createNav();
    header.appendChild(nav);

    return header;
}

function createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const buttonHome = document.createElement('button');
    buttonHome.textContent= 'Home';
    buttonHome.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('active')) return;
        setActiveButton(buttonHome);
        loadHome();

    })

    const buttonContent = document.createElement('button');
    buttonContent.textContent = 'Content';
    buttonContent.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('active')) return;
        setActiveButton(buttonContent);
        loadContent();

    })

    const buttonAbout = document.createElement('button');
    buttonAbout.textContent= 'About';
    buttonAbout.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('active')) return;
        setActiveButton(buttonAbout);
        loadAbout();

    })
    
    nav.appendChild(buttonHome);
    nav.appendChild(buttonContent);
    nav.appendChild(buttonAbout);

    return nav
}

function createMain(){
    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add('main');
    return main;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove('active');
      }
    }); 
  
    button.classList.add("active");
  }

  function createFooter(){
      const footer = document.createElement('footer')
      footer.classList.add('footer');
      footer.style.backgroundColor='reb'
      
      return footer;
  }

function initialPage(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain())
    content.appendChild(createFooter());
    loadHome();
}

export default initialPage;