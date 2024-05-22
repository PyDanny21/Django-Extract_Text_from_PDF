
// Darkmode
// const darkMode=document.getElementById('darkmode');
// darkMode.addEventListener('click',()=>{
//     const st=darkMode.value;
//     console.log(st);
//     // const state= st ? console.log('checked'): console.log('unchecked');
// });

function toggleDark() {
    const currentTheme = document.getElementById('theme').getAttribute('href');
    const newTheme = currentTheme.includes('style.css') ? '/static/css/dark.css' : '/static/css/style.css';
    document.getElementById('theme').setAttribute('href',newTheme);
    localStorage.setItem('theme', newTheme);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = userPrefersDark ? '/static/css/dark.css' : '/static/css/style.css';
    const theme = savedTheme || defaultTheme;
    // document.getElementById('stylesheet').setAttribute('href',theme);
    document.getElementById('theme').setAttribute('href', theme);
});

