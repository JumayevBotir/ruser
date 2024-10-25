const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


const localMod=localStorage.getItem('mode');

if(localMod){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}
const togllBtn=()=>{    
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
    body.classList.toggle('dark-mode');
}
darkBtn.addEventListener('click',()=>{
    togllBtn()
    localStorage.setItem('mode','dark-mode')
})
lightBtn.addEventListener('click',()=>{
    togllBtn()
    localStorage.setItem('mode','')
})  