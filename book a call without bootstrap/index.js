function osubmit(event){
    event.preventDefault();
    let uname = document.getElementById('username').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let date = document.getElementById('date').value
    let time = document.getElementById('time').value
    
    console.log(uname)
    console.log(email)
    console.log(phone)
    console.log(date)
    console.log(time)
}