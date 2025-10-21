const parent = document.getElementById('parent');

// Ab parent ke upar event listener lagayenge
parent.addEventListener('click', (e) => {
    const child = e.target;
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id;
}); 