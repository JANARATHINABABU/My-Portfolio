const bar = document.querySelector('.bar');
const links = document.querySelector('.links');

bar.addEventListener('click', () => {
    links.classList.toggle('active');
});

const conForm = document.getElementById('conForm');
const formMsg = document.getElementById('formMsg');

conForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if(name && email && msg) {
        formMsg.style.color = '#16a34a';
        formMsg.textContent = 'Thank you! Your message has been sent successfully.';
        conForm.reset();
    } else {
        formMsg.style.color = '#dc2626';
        formMsg.textContent = 'Please fill out all fields'
    }
});