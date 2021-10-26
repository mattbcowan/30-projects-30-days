const matches = document.querySelectorAll("li")

for(let i = 0; i < matches.length; i++) {
    matches[i].addEventListener('click', function() {
        matches.forEach(e => {
            e.classList.remove('active')
        })
        matches[i].classList.add('active')
    })
}