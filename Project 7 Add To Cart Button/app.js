document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
            button.classList.add("loading");
            setTimeout(() => button.classList.remove("loading"), 5700);
        }
        e.preventDefault();
    })
);
