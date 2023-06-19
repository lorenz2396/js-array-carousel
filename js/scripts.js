const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

const itemsContainer = document.querySelector('.items');

currentlyActiveElementIndex = 0; // variabile dello stato del mio applicativo, quale elemento è attivo

for (let i = 0; i < images.length; i++){
    console.log(i, images[i])

    if (i == 0){
        itemsContainer.innerHTML = itemsContainer.innerHTML + //al vecchio elemento ci aggiungo il nuovo 
    `
            <div class="item active">
                <img src="${images[i]}" alt="">
            </div>
    `;
    } 
    else{
        itemsContainer.innerHTML = itemsContainer.innerHTML + //al vecchio elemento ci aggiungo il nuovo 
    `
            <div class="item">
                <img src="${images[i]}" alt="">
            </div>
    `;
    }
};

const allItems = document.querySelectorAll('.item');
console.log('allItems', allItems, typeof allItems)

const nextArrow = document.querySelector('.next')

nextArrow.addEventListener('click',

    function(){
        if (currentlyActiveElementIndex < allItems.length - 1){
            console.log('Elemento attivo prima del click su NEXT', currentlyActiveElementIndex);
            //Qui rimuovo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.remove('active');
            currentlyActiveElementIndex++;
            console.log('Elemento attivo dopo del clck su NEXT', currentlyActiveElementIndex);
            //Qui aggiungo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.add('active')
        }
        else{
            console.log('Ora ti fermi');
        }
    }

);

const prevArrow = document.querySelector('.prev')

prevArrow.addEventListener('click',

    function(){
        //se non sono al primo elemento
        if (currentlyActiveElementIndex > 0){
            console.log('elemento attivo prima del click su PREV', currentlyActiveElementIndex);
            //Qui rimuovo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.remove('active');
            currentlyActiveElementIndex--;
            console.log('Elemento attivo dopo clck su PREV', currentlyActiveElementIndex);
            //Qui aggiungo classi all'elemento corrente attivo
            allItems[currentlyActiveElementIndex].classList.add('active')
        }
        else{
            console.log('Ora ti fermi');
        }
    }

);