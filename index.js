const selectElement = document.getElementById("selectOption");

selectElement.addEventListener("change", function(event) {
    const selectedOption = event.target.value;
    console.log("Selected option:", selectedOption);
});

const mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 10
}

const myMap = L.map('map', mapOptions);

