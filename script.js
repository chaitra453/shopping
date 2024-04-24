console.log('====================================');
console.log("Connected");
console.log('====================================');
// Select all color boxes
const colorBoxes = document.querySelectorAll('.color-box');

// Add click event listener to each color box
colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the selected color
        const selectedColor = box.style.backgroundColor;

        // Remove border from all color boxes
        colorBoxes.forEach(box => {
            box.style.border = '1px solid #ccc';
        });

        // Add border to the selected color box
        box.style.border = '2px solid white';

        // You can also use the selected color for other purposes, like updating a preview
    });
});

let color = ''; // Variable to store selected color
let colorName = ''; // Variable to store selected color name

// Function to set the selected color and color name
function setColor(selectedColor, name) {
    color = selectedColor;
    colorName = name;
}

// Function to add the product to cart
function addToCart() {
    if (color === '') {
        alert('Please select a color.');
        return;
    }

    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (!selectedSize) {
        alert('Please select a size.');
        return;
    }

    const selectedSizeValue = selectedSize.value;
    const cartMessage = document.getElementById('cart-message');
    cartMessage.textContent = `Embrace Sideboard with Color ${colorName} and Size ${selectedSizeValue} added to cart.`;
    cartMessage.classList.add('highlight');
}

