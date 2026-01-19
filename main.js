const menuDisplay = document.querySelector('.menu-display');
const generateBtn = document.querySelector('#generate');

const dinnerMenus = [
    '치킨', '피자', '햄버거', '떡볶이', '김치찌개',
    '된장찌개', '삼겹살', '파스타', '초밥', '라면',
    '부대찌개', '곱창', '보쌈', '족발', '돈까스',
    '카레', '짜장면', '짬뽕', '탕수육', '마라탕'
];

const generateMenu = () => {
    menuDisplay.innerHTML = ''; // Clear previous menu
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');
    menuDiv.textContent = selectedMenu;
    menuDisplay.appendChild(menuDiv);

    if (selectedMenu === '피자') {
        const pizzaImage = document.createElement('img');
        pizzaImage.src = 'pizza-5275191_640.jpg';
        pizzaImage.alt = '맛있는 피자';
        pizzaImage.style.maxWidth = '100%';
        pizzaImage.style.marginTop = '20px';
        menuDisplay.appendChild(pizzaImage);
    }
};

generateBtn.addEventListener('click', generateMenu);