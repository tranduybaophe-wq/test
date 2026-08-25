const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {

    task.addEventListener("click", () => {

        const title = task.querySelector("strong").textContent;

        alert(`Bắt đầu luyện tập: ${title}`);

    });

});


const periods = document.querySelectorAll(".period");

periods.forEach(period => {

    period.addEventListener("click", () => {

        periods.forEach(item => {
            item.classList.remove("active");
        });

        period.classList.add("active");
    });

});


const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", event => {

        event.preventDefault();

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

    });

});