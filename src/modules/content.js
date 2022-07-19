const menuPizza = [
    {
        name: 'Fruits',
        img : '../dist/images/fruits.jpg'
    },
    {
        name: 'Litti Chokha',
        img : '../dist/images/litti chokha.jpg'
    },
    {
        name: 'Dhosa',
        img : '../dist/images/dhosa.jpg'
    },
    {
        name: 'Bugger',
        img : '../dist/images/buger.jpg'
    },
    {
        name: 'Cheken',
        img : '../dist/images/cheken.jpg'
    },
    {
        name: 'Panner',
        img : '../dist/images/paneer.jpg'
    }
]

function cellPizza(p){
    let pizza = document.createElement('div');
    pizza.classList.add('pizza');
    let h3 = document.createElement('h3');
    h3.textContent = p.name;
    let img = document.createElement('img');
    img.classList.add('imgPizza');
    img.setAttribute('src', p.img);
    pizza.appendChild(h3);
    pizza.appendChild(img);

    return pizza;
}

function gridPizzas (){
    const divGrid = document.createElement('div');
    divGrid.classList.add('menuGrid');
        
    for(let i of menuPizza){
        const pizza = cellPizza(i);
        divGrid.appendChild(pizza); 
    }
    return divGrid;
}

function loadContent(){
    const main = document.getElementById('main');
    main.textContent = "";
    const div = document.createElement('div');
    div.appendChild(gridPizzas());

    main.appendChild(div);
}

export default loadContent;