const login__btn = document.getElementById('log__btn');
console.log(login__btn);

login__btn.addEventListener('click', (e) => {
    e.preventDefault();

    const u = 'it';
    const p = 'abc123';

    const user = document.getElementById('user__name').value;
    const pass = document.getElementById('user__pass').value;
    console.log(`${user} ${pass}`);
    if(u === user && p === pass){

       document.querySelector('.login-form').style.display = `none`;
       document.querySelector('.page__loader').classList.remove('visible');
       
        setTimeout(() => {
            location.href = `course/startsida.html`;
        }, 1000);
        
        


    }else{
        const err = document.querySelector('.error');
        err.style.display = `block`;
    }
})

const user__textbox = document.getElementById('user__name');
const pass__textbox = document.getElementById('user__pass');

user__textbox.addEventListener('focus', () =>{
    const err = document.querySelector('.error');
        err.style.display = `none`;
});

pass__textbox.addEventListener('focus', () =>{
    const err = document.querySelector('.error');
        err.style.display = `none`;
})
