// Variableasd
var likedBox = document.getElementById('LikedBox');
var box = document.getElementById('JsBox');
var basket = [];

// For/Home page 
for (var i = 0; i < pokemons.length; i++) {
    var item = document.createElement('div');
    item.classList.add('item');
    box.appendChild(item);
    
    var img = new Image(100, 100);
    img.src = pokemons[i].img;
    img.classList.add('img');
    item.appendChild(img);

    var title = document.createElement('h2');
    title.classList.add('h2');
    item.appendChild(title);
    title.textContent = pokemons[i].name;

    var number = document.createElement('div')
    number.classList.add('number')
    number.dataset.id = 'JsNumber'
    item.appendChild(number)
    number.textContent = '№ ' + pokemons[i].num;

    var weight = document.createElement('div');
    weight.classList.add('Weight');
    weight.dataset.id = 'JsWeight';
    item.appendChild(weight)
    weight.textContent = 'W: ' + pokemons[i].weight;

    var height = document.createElement('div');
    height.classList.add('height');
    item.dataset.id = 'JsHeight';
    item.appendChild(height)
    height.textContent = 'H: ' + pokemons[i].height;

    var cap = document.createElement('div');
    cap.classList.add('capabilities');
    item.appendChild(cap);
    cap.textContent = pokemons[i].type

    var btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.textContent = 'Like';
    btn.dataset.id = i ; 
    item.appendChild(btn);
}

// For/ Liked page
box.addEventListener('click', function (event) {
    var Pokeindex = Number(event.target.dataset.id);
    var UserPoke = pokemons[Pokeindex];
    if (event.target) {
        basket.push(UserPoke);
    }
    
    for (var i = 0; i < basket.length; i++) {
        var img = new Image(100, 100);
        img.src = basket[i].img;
        img.classList.add('img');
        likedBox.appendChild(img);
    
        var LikedName = document.createElement('h2');
        LikedName.classList.add('h2');
        likedBox.appendChild(LikedName);
        LikedName.textContent = basket[i].name;
    
        var LikedNumber = document.createElement('div')
        LikedNumber.classList.add('LikedNumber')
        LikedNumber.dataset.id = 'JslNumber'
        likedBox.appendChild(LikedNumber)
        LikedNumber.textContent = '№ ' + basket[i].num;
    
        var LikedWeight = document.createElement('div');
        LikedWeight.classList.add('LikedWeight');
        LikedWeight.dataset.id = 'JslWeight';
        likedBox.appendChild(LikedWeight);
        LikedWeight.textContent = 'W: ' + basket[i].weight;
    
        var LikedHeight = document.createElement('div');
        LikedHeight.classList.add('LikedHeight');
        likedBox.appendChild(LikedHeight)
        LikedHeight.textContent = 'H: ' + basket[i].height;
    
        var LikedCap = document.createElement('div');
        LikedCap.classList.add('LikedCaps');
        likedBox.appendChild(LikedCap);
        LikedCap.textContent = basket[i].type
    }
})  
