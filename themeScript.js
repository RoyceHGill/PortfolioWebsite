var html = document.querySelector("html")
var theme = localStorage.getItem("theme")
        validateTheme(theme)

function switchTheme(theme) {
    html.dataset.theme = `theme-${theme}`;
    setTheme(theme);
}
function setTheme(theme) {
    localStorage.setItem("theme", theme)
}
function validateTheme(theme)
{
    if (theme != null) {
        if (theme === 'dark') {
        switchTheme('dark')
        }
    
        else {
        switchTheme('light')

        }
    }
    else {
        switchTheme("light")
    setTheme("light")
    }
}

window.addEventListener('storage', function(event) {
    if (event.key === 'theme') {
// The value of 'myKey' in local storage has changed
    var newValue = event.newValue;
// Do something with the new value
    switchTheme(newValue);
    }
});
        

