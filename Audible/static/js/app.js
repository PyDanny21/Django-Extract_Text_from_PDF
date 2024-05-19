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

// function Search() {
//     const Input=document.getElementById('search');

//     const pdfItem=document.querySelectorAll('.item');
//     console.log(Input.textContent);
//     // pdfItem.forEach(('item'),()=>{
//     //     console.log(item.textContent);

//     // });

// };

// const Input=document.getElementById('search');

// Input.addEventListener('keydown',(event)=>{
//     console.log(event.key);
//     console.log(this.Text);
// });



function speak(text) {
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();

    // use female voices
    var voice = voices.find(v => v.name.includes('female'));

    // Create speechsynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    // utterance.volume = 1;
    // utterance.rate = 10;

    // speak the text 
    synth.speak(utterance);

}