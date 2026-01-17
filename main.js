const numbersContainer = document.querySelector('.numbers');
const generateBtn = document.querySelector('#generate');

const generateNumbers = () => {
    numbersContainer.innerHTML = ''; // Clear previous numbers
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = getColor(number);
        numbersContainer.appendChild(numberDiv);
    });
};

const getColor = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
};

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();