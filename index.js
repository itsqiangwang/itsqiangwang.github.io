document.querySelectorAll("nav details ul li").forEach(li => {
    li.addEventListener("click", function () {
        const details = this.closest("details");
        if (details && details.hasAttribute("open")) {
            details.removeAttribute("open");
        }
    });
});

document.querySelector("nav details").addEventListener("toggle", function () {
    const allElements = document.body.children;
    if (this.hasAttribute("open")) {
        Array.from(allElements).forEach(el => {
            if (el !== document.querySelector("nav")) {
                el.classList.add("blur-effect");
            }
        });
    } else {
        document.querySelectorAll(".blur-effect").forEach(el => {
            el.classList.remove("blur-effect");
        });
    }
});
