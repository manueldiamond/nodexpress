const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

fetch('http://localhost/9090/api/features')
.then((res)=>console.log(res.json()))
.catch((e)=>console.log(e))