const fora = document.getElementById("fora")
const successmesage = document.getElementById("successmesage")

fora.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    successmesage.innerHTML = `Your informacion is saved. <br>  ${email} <br> ${password}`

});