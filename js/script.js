function getTheme () {
    let theme = localStorage.getItem('theme');

    if (theme === null) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    localStorage.setItem('theme',theme);
    console.log(theme);
    return theme;
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function setTheme (theme) {
    localStorage.setItem('theme',theme);
    applyTheme(theme);
    console.log(theme);
}

function setEventListener () {
    const lightThemeButton = document.querySelector('.theme-light');
    lightThemeButton.addEventListener('click',() => setTheme('light'));
    const darkThemeButton = document.querySelector('.theme-dark');
    darkThemeButton.addEventListener('click',() => setTheme('dark'));
}

getTheme()
setEventListener()
