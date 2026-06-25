function searchVideo() {
    let input = document.getElementById("search").value.trim();

    if(input === "") {
        alert("Please enter something!");
    } else {
        alert("Searching for: " + input);
    }
}

/* Sidebar active effect */
let menus = document.querySelectorAll(".menu");

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menus.forEach(m => m.classList.remove("active"));
        menu.classList.add("active");
    });
});