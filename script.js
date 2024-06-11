const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#msg");

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const user = {
        userName: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    localStorage.setItem('user', JSON.stringify(user));
    location.href="./blog.html"
});




const themeSwitcher = document.querySelector("#theme-switcher");
const darkMode = document.querySelector(".light");

let mode = "dark"

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        darkMode.setAttribute('class', "dark");
    }
    else {
        mode = 'light';
        darkMode.setAttribute('class', 'light');
    }
});