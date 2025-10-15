

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))


// Execute esta função APÓS alguns segundos (Ajuste o tempo se necessário)
setTimeout(function () {
    const selo = document.querySelector('a[href*="elfsight.com"][target="_blank"]');
    if (selo) {
        selo.remove();
        console.log("Selo da Elfsight removido após estabilização.");
    }
}, 3000); // 3 segundos