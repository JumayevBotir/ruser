    // api
    const API = 'https://randomuser.me/api/?results=9'

    //  const des=[
    //  {"gender":"female","name":{"title":"Mrs","first":"Nataša","last":"Jović"},"location":{"street":{"number":5616,"name":"Gorana Petrovića"},"city":"Ivanjica","state":"Moravica","country":"Serbia","postcode":45243,"coordinates":{"latitude":"56.4544","longitude":"68.7455"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"natasa.jovic@example.com","login":{"uuid":"a4848445-64a2-481b-9a90-ddbe60781daa","username":"angrysnake883","password":"miles","salt":"sNjFgUvN","md5":"599a9d6c485152fde8ed8150a347d25a","sha1":"5d9ca13f3055179e05413899d2458f411f62cbb9","sha256":"8d016ad627eebe3e8ef731b3bc193b7db40f515a59d34f4725162ad31b746ff6"},"dob":{"date":"1986-09-30T04:10:35.518Z","age":38},"registered":{"date":"2020-11-01T07:08:15.538Z","age":3},"phone":"014-5086-618","cell":"068-7977-972","id":{"name":"SID","value":"405441106"},"picture":{"large":"https://randomuser.me/api/portraits/women/38.jpg","medium":"https://randomuser.me/api/portraits/med/women/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/38.jpg"},"nat":"RS"} ,
    //  {"gender":"female","name":{"title":"Mrs","first":"Nataša","last":"Jović"},"location":{"street":{"number":5616,"name":"Gorana Petrovića"},"city":"Ivanjica","state":"Moravica","country":"Serbia","postcode":45243,"coordinates":{"latitude":"56.4544","longitude":"68.7455"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"natasa.jovic@example.com","login":{"uuid":"a4848445-64a2-481b-9a90-ddbe60781daa","username":"angrysnake883","password":"miles","salt":"sNjFgUvN","md5":"599a9d6c485152fde8ed8150a347d25a","sha1":"5d9ca13f3055179e05413899d2458f411f62cbb9","sha256":"8d016ad627eebe3e8ef731b3bc193b7db40f515a59d34f4725162ad31b746ff6"},"dob":{"date":"1986-09-30T04:10:35.518Z","age":38},"registered":{"date":"2020-11-01T07:08:15.538Z","age":3},"phone":"014-5086-618","cell":"068-7977-972","id":{"name":"SID","value":"405441106"},"picture":{"large":"https://randomuser.me/api/portraits/women/38.jpg","medium":"https://randomuser.me/api/portraits/med/women/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/38.jpg"},"nat":"RS"},
    //  {"gender":"female","name":{"title":"Mrs","first":"Nataša","last":"Jović"},"location":{"street":{"number":5616,"name":"Gorana Petrovića"},"city":"Ivanjica","state":"Moravica","country":"Serbia","postcode":45243,"coordinates":{"latitude":"56.4544","longitude":"68.7455"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"natasa.jovic@example.com","login":{"uuid":"a4848445-64a2-481b-9a90-ddbe60781daa","username":"angrysnake883","password":"miles","salt":"sNjFgUvN","md5":"599a9d6c485152fde8ed8150a347d25a","sha1":"5d9ca13f3055179e05413899d2458f411f62cbb9","sha256":"8d016ad627eebe3e8ef731b3bc193b7db40f515a59d34f4725162ad31b746ff6"},"dob":{"date":"1986-09-30T04:10:35.518Z","age":38},"registered":{"date":"2020-11-01T07:08:15.538Z","age":3},"phone":"014-5086-618","cell":"068-7977-972","id":{"name":"SID","value":"405441106"},"picture":{"large":"https://randomuser.me/api/portraits/women/38.jpg","medium":"https://randomuser.me/api/portraits/med/women/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/38.jpg"},"nat":"RS"}    

    //  ]
     
   
      
    // for leader
    const overlay = document.getElementById('overlay')
    ///Lodl
    const loadOver=(toggle)=>{
    if(toggle){
        overlay.classList.remove('hidden')
    }
    else{
        overlay.classList.add('hidden')
    }
    }

    ///request-promes
    const getData=(resurs)=>{
        return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();
        
        request.addEventListener('readystatechange',()=>{
            
                if(request.readyState<4){
                    loadOver(true)
                }else if(request.readyState === 4  ) {
                    loadOver(false)
                    if(request.status === 200){
                        const data=JSON.parse(request.responseText);
                    resolve(data.results)
                    }
                    
                    
                }else {
                    loadOver(false)
                    reject('Eror...')
                }
        });


        request.open('GET',resurs);
        request.send();
        })
        
    }


    const reold=()=>{
        getData(API)
        .then((data)=>{
            UppData(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    document.addEventListener('DOMContentLoaded', reold)
 