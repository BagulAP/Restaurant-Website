let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });

  <script>
    document.querySelector('form').addEventListener('submit', function(e) {
        // Validate Name field: Only letters and spaces allowed
        const nameField = document.getElementById('name');
        const namePattern = /^[A-Za-z ]+$/; // Regex to match letters and spaces only

        if (!namePattern.test(nameField.value)) {
            alert('Please enter a valid name (letters only, spaces allowed).');
            e.preventDefault(); // Prevent form submission
            return;
        }

        // Validate Number field: Ensure only numbers are entered
        const numberField = document.getElementById('number');
        if (numberField.value === '' || isNaN(numberField.value)) {
            alert('Please enter a valid number.');
            e.preventDefault(); // Prevent form submission
            return;
        }
    });
</script>



