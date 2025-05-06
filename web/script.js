window.onscroll = function () {
    var topBar = document.querySelector('.top-bar');
    if (window.scrollY > 100) {  // Uses scrollY instead of pageYOffset
        topBar.style.position = 'fixed';
        topBar.style.top = '0';
    } else {
        topBar.style.position = 'relative'; // Reset when back to the top
        topBar.style.top = 'initial';
    }
};
document.getElementById('changeStyles').addEventListener('click', function () {
    var alternateStyles = document.querySelector('link[title="Alternate Styles"]');
    if (alternateStyles.disabled) {
        alternateStyles.disabled = false;
    } else {
        alternateStyles.disabled = true;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the container for the current date and time
    const dateTimeContainer = document.querySelector('.current-date-time');

    // Function to update date and time
    function updateDateTime() {
        const now = new Date(); // Get the current date and time
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formattedDateTime = now.toLocaleString('en-US', options); // Format date and time

        // Display formatted date and time in the container
        dateTimeContainer.textContent = formattedDateTime;
    }

    // Initial update
    updateDateTime();

    // Update every second
    setInterval(updateDateTime, 1000);

    // Email subscription handling
    const subscribeForm = document.querySelector('.subscribe-section form');

    // Listen for form submission
    subscribeForm.addEventListener('submit', function (event) {
        // Get the email input value
        const emailInput = subscribeForm.querySelector('input[name="email"]');
        const email = emailInput.value;

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            // If email format is invalid, prevent form submission and show error message
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        // Send subscription request
        // This example assumes the subscription request is sent to the `/subscribe` endpoint
        fetch('/subscribe', {
            method: 'POST',
            body: new URLSearchParams({
                email: email
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Subscription successful
                    alert('Thank you for subscribing!');
                    emailInput.value = ''; // Clear the input field
                } else {
                    // Handle error
                    alert('Subscription failed, please try again later.');
                }
            })
            .catch(error => {
                // Handle network or other errors
                alert('An error occurred, please try again later.');
                console.error('Subscription request error:', error);
            });

        // Prevent default form submission
        event.preventDefault();
    });

    let currentSlide = 0; // 0-intro, 1-news

    function slide(direction) {
        // const container = document.querySelector('.main-content');
        // const totalSlides = 2;
        const container = document.querySelector('.main-content');
        const slideWidth = container.querySelector('.news-item').offsetWidth; // 获取一个新闻项的宽度
        const totalSlides = container.querySelectorAll('.news-item').length;

        // Adjust current slide index based on the direction
        if (direction === 'right' && currentSlide < totalSlides - 1) {
            currentSlide++;
        } else if (direction === 'left' && currentSlide > 0) {
            currentSlide--;
        }

        // Update the container's transform style to slide content
        // container.style.transform = `translateX(-${currentSlide * 50}%)`;
        container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Add event listeners for slide navigation buttons
    document.querySelector('.scroll-btn.left').addEventListener('click', () => slide('left'));
    document.querySelector('.scroll-btn.right').addEventListener('click', () => slide('right'));
});
