document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', (e) => {
        document.querySelector('.category.active').classList.remove('active');
        e.target.classList.add('active');
    });
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none"; // Hide preloader
  });
  
