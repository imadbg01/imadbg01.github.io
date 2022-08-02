// DOM Elements 

const htmlTheme = document.querySelector('html')
const themeToggle = document.querySelector("#theme-toggle")
const logo = document.querySelector(".logo img")

// Events
themeToggle.addEventListener("change", switchTheme)

if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlTheme.setAttribute("data-theme", "dark")
  themeToggle.checked = true
} else {
  htmlTheme.setAttribute("data-theme", "light")
  themeToggle.checked = false
}

// Functions


function switchTheme() {
  const theme = htmlTheme.getAttribute("data-theme")
  if (theme === "light") {
    htmlTheme.setAttribute("data-theme", "dark")
    logo.setAttribute("src", "./assets/img/logo_light.svg")
    htmlTheme.classList.toggle("fadeIn")
  } else {
    htmlTheme.setAttribute("data-theme", "light")
    logo.setAttribute("src", "./assets/img/logo_dark.svg")
    htmlTheme.classList.toggle("fadeIn")

  }
}


const firstFunction = () => {
  // do something
};

const secondFunction = (a, b) => {
  return a - b;
};

const authorFunction = () => {
  return {
    // return some object
  };
};
