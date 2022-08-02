const htmlTheme = document.querySelector('html')
const themeToggle = document.querySelector("#theme-toggle")

themeToggle.addEventListener("change", switchTheme)

if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlTheme.setAttribute("data-theme", "dark")
  themeToggle.checked = true
} else {
  htmlTheme.setAttribute("data-theme", "light")
  themeToggle.checked = false
}

function switchTheme() {
  const theme = htmlTheme.getAttribute("data-theme")
  if (theme === "light") {
    htmlTheme.setAttribute("data-theme", "dark")
    htmlTheme.classList.toggle("fadeIn")
  } else {
    htmlTheme.setAttribute("data-theme", "light")
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
