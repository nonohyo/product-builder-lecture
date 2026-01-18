const menuDisplay = document.querySelector('.menu-display');
const generateBtn = document.querySelector('#generate');

const dinnerMenus = [
    'Chicken', 'Pizza', 'Hamburger', 'Tteokbokki', 'Kimchi Stew',
    'Soybean Paste Stew', 'Pork Belly', 'Pasta', 'Sushi', 'Ramen',
    'Budae-jjigae', 'Gopchang', 'Bossam', 'Jokbal', 'Tonkatsu',
    'Curry', 'Jajangmyeon', 'Jjamppong', 'Tangsuyuk', 'Malatang'
];

const generateMenu = () => {
    menuDisplay.innerHTML = ''; // Clear previous menu
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');
    menuDiv.textContent = selectedMenu;
    menuDisplay.appendChild(menuDiv);

    if (selectedMenu === 'Pizza') {
        const pizzaImage = document.createElement('img');
        pizzaImage.src = 'pizza-5275191_640.jpg';
        pizzaImage.alt = 'A delicious pizza';
        pizzaImage.style.maxWidth = '100%';
        pizzaImage.style.marginTop = '20px';
        menuDisplay.appendChild(pizzaImage);
    }
};

generateBtn.addEventListener('click', generateMenu);
