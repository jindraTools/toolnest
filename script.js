function searchTools() {

    const searchInput = document.getElementById("search");

    if (!searchInput) {
        return;
    }

    const input = searchInput.value.toLowerCase().trim();

    const tools = document.getElementsByClassName("tool");

    for (let i = 0; i < tools.length; i++) {

        const titleElement =
            tools[i].querySelector("h2, h3");

        if (!titleElement) {
            tools[i].style.display = "";
            continue;
        }

        const title =
            titleElement.innerText.toLowerCase();

        if (title.includes(input)) {
            tools[i].style.display = "";
        } else {
            tools[i].style.display = "none";
        }
    }
}
document.querySelector('a[href="#about"]').addEventListener("click", function(e) {

    e.preventDefault();

    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";

});


document.querySelector('a[href="#contact"]').addEventListener("click", function(e) {

    e.preventDefault();

    document.getElementById("contact").style.display = "block";
    document.getElementById("about").style.display = "none";

});
function closePopup() {

    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

}