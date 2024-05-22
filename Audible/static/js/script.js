
function closeSetting() {
    const Setting=document.querySelector('.Settings');
    Setting.style.display='none';
};

function openSetting() {
    const Setting=document.querySelector('.Settings');
    Setting.style.display='flex';
};

function closeAccount() {
    const Account=document.querySelector('.Account');
    Account.style.display='none';
};

function openAccount() {
    const Account=document.querySelector('.Account');
    Account.style.display='block';
};

function Search() {
    const Input=document.getElementById('search');
    const pdfItem=document.querySelectorAll('#item');
    pdfItem.forEach((item)=>{
        const Val=Input.value.toLowerCase();
        const Val2=item.innerHTML.toLowerCase();
        if (Val2.includes(Val)) {
            item.style.display='flex';
        } else{
            item.style.display='none';
        };

    });

};



function speak(text) {
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();

    // use female voices
    var voice = voices.find(v => v.name.includes('female'));

    // Create speechsynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(JSON.stringify(text));
    utterance.voice = voice;
    // utterance.volume = 1;
    // utterance.rate = 10;

    // speak the text 
    synth.speak(utterance);

}

const Lists=document.querySelectorAll('#item');
if (window.innerWidth<=900) {
    Lists.forEach((list) =>{
        list.addEventListener('click',()=>{
            const Browse=document.querySelector('.browse-files');
            Browse.style.display='none';
            const Display=document.querySelector('.display').style.display='block';
    
        });
    });
};

const Back=document.getElementById('back');
Back.addEventListener('click',()=>{
    if (window.innerWidth<='900') {
        const Browse=document.querySelector('.browse-files');
        Browse.style.display='block';
        const Display=document.querySelector('.display').style.display='none';        
    };
});

const Forward=document.getElementById('forward');
Forward.addEventListener('click',()=>{
    if (window.innerWidth<='900') {
        const Browse=document.querySelector('.browse-files');
        Browse.style.display='none';
        const Display=document.querySelector('.display').style.display='block';        
    };
});


// Darkmode
// const darkMode=document.getElementById('darkmode');
// darkMode.addEventListener('click',()=>{
//     const st=darkMode.value;
//     console.log(st);
//     // const state= st ? console.log('checked'): console.log('unchecked');
// });

// function toggleDark() {
//     const currentTheme = document.getElementById('theme').getAttribute('href');
//     const newTheme = currentTheme.includes('style.css') ? '/static/css/dark.css' : '/static/css/style.css';
//     document.getElementById('theme').setAttribute('href',newTheme);
//     localStorage.setItem('theme', newTheme);
// };

// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const defaultTheme = userPrefersDark ? '/static/css/dark.css' : '/static/css/style.css';
//     const theme = savedTheme || defaultTheme;
//     // document.getElementById('stylesheet').setAttribute('href',theme);
//     document.getElementById('theme').setAttribute('href', theme);
// });

