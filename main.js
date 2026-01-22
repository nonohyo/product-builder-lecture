// Teachable Machine model URL
const URL = "https://teachablemachine.withgoogle.com/models/AEP282Xz6/";

let model, labelContainer, maxPredictions;

// Initialize the Teachable Machine model
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Get the label container element
    labelContainer = document.getElementById("label-container");

    // Create a div for each class label
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

// Predict the class of the image
async function predict(image) {
    const prediction = await model.predict(image);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(0) + "%";
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

// Initialize the model when the page loads
init();

// Event listener for image upload
document.getElementById("imageUpload").addEventListener("change", async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = ''; // Clear previous image

        const image = document.createElement('img');
        const reader = new FileReader();

        reader.onload = (e) => {
            image.src = e.target.result;
            image.width = 200;
            image.height = 200;
            imageContainer.appendChild(image);
            image.onload = () => predict(image); // Run prediction after image is loaded
        };

        reader.readAsDataURL(files[0]);
    }
});
