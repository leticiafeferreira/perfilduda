const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header");

//função para alternar o tema 
function chargeTheme() {
    const currenteTheme = rootHtml.getAttribute("data-theme")

    currenteTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme" , "dark")

    toggleTheme.classList.toggle("bi bi-suit-heart-fill")
    toggleTheme.classList.toggle("bi bi-suit-heart")
    
}
toggleTheme.addEventListener("click", chargeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active"):
        accordionItem.classList.add("active");
    })


})