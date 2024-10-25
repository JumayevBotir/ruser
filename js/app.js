const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')
//refresh
formButton.addEventListener('click',(e)=>{
    e.preventDefault()
    reold()
    clearBtn.classList.remove('hidden')
})
//cleer
clearBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    user.innerHTML=""
    clearBtn.classList.add('hidden')
})
///delet
if(user.innerHTML===''){
  clearBtn.classList.add('hidden')
}else{
  clearBtn.classList.remove('hidden')
}
////////Search 
form['form__input'].addEventListener('input',()=>{
    const inputvalu=form['form__input'].value
   const userItem=document.querySelectorAll('.user__item')
    userItem.forEach((name)=>{
        let a=name.querySelector('.user__name').lastElementChild.textContent.toLowerCase()
        let b=name.querySelector('.user__year').lastElementChild.textContent
        if(a.includes(inputvalu)||b.includes(inputvalu)){
            name.classList.remove('hidden')
        }
        else  {
            name.classList.add('hidden')
            
        }
    })
 
    

})



const UppData=(data)=>{
    user.innerHTML='';
    data.forEach((item)=>{
      
        const {gender,name,picture  ,location,dob }=item
        user.innerHTML+=
        `
        <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>${name.name} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>${dob.age}</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${location.city},${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
        `
        
    })
}

//delet


user.addEventListener('click',(e)=>{

  
  if([...e.target.classList].includes('user__delete--btn')){
    const del=e.target.closest('.user__item');
    if(del)(
      del.remove()
    )
  }

})

