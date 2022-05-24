const ham = document.getElementById("ham");
const close = document.getElementById("close");
const pages = document.getElementById("pages")

ham.addEventListener('click', function() {
  pages.style.display = "flex"
  ham.style.display = 'none'
  close.style.display='block'
})

close.addEventListener('click', function() {
  pages.style.display = "none"
  close.style.display = "none"
  ham.style.display = "block"
})
