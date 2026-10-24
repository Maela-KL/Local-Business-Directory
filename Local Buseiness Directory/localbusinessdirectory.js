const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("."));
app.listen(PORT, () => { console.log(`Server is running at http://localhost:${PORT}`)})

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
searchInput.addEventListener("keyup", function() {
    const term = searchInput.ariaValueMax.toLowerCasa();

    cards.forEach(card=> {
        const placeName = 
    card.querySelector("p").textContent.toLowerCase();

    if (placeName.includes(term)) {
        card.computedStyleMap.display = "block";
    } else {
        card.computedStyleMap.display = "none";
    }
    });
});
document.getElementById("contactbtn").addEventListener('click', () => {
    window.location.href="index.html";
});
