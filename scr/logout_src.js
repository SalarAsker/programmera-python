
const logoutBtn = document.getElementById('logout__btn');
console.log(logoutBtn);
logoutBtn.addEventListener('click', () =>{
    console.log('hello');
    location.href = `../index.html`;
})
