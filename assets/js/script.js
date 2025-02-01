// JavaScript for Smooth Scrolling and Interactivity

// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to the target element smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Reveal Animations

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to add 'reveal' class to elements in viewport
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        if (isInViewport(reveals[i])) {
            reveals[i].classList.add('active');
        }
    }
}

// Event Listener for scrolling
window.addEventListener('scroll', revealElements);

// Add 'reveal' class to elements you want to animate

// JavaScript for Smooth Scrolling and Interactivity

// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to the target element smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Reveal Animations (Existing Code)

// ... (Existing reveal animations code)

// JavaScript for Service Modals

// Get all the 'Learn More' buttons
const detailsButtons = document.querySelectorAll('.details-btn');

// Get the modal container
const modalContainer = document.getElementById('modal-container');

// Service Details Data
const servicesData = {
    'customer-service': {
        title: 'Customer Service',
        description: 'Offering exceptional customer support to enhance satisfaction and loyalty.',
        tasks: [
            'Inbound and outbound call handling.',
            'Email and chat support.',
            'Resolving customer queries and complaints.',
            'Managing customer relationships and follow-ups.'
        ]
    },
    'admin-assistance': {
        title: 'Administrative Assistance',
        description: 'Streamlining administrative tasks to improve efficiency and productivity.',
        tasks: [
            'Data entry and database management.',
            'Scheduling appointments and calendar management.',
            'Document preparation and organization.',
            'Performance and quality improvement analysis.'
        ]
    },
    'web-development': {
        title: 'Web Development',
        description: 'Creating responsive and user-friendly websites tailored to your needs.',
        tasks: [
            'Website design and development using HTML, CSS, and JavaScript.',
            'Website maintenance and updates.',
            'Content management and SEO optimization.'
        ]
    },
    'graphic-design': {
        title: 'Graphic Design & Multimedia',
        description: 'Crafting visually appealing graphics and multimedia content for your brand.',
        tasks: [
            'Graphic design using Adobe Photoshop, Illustrator, and Canva.',
            'Video editing and production.',
            'Designing marketing materials (brochures, flyers, banners).'
        ]
    },
    'social-media': {
        title: 'Social Media Management',
        description: 'Managing your social media presence to increase engagement and reach.',
        tasks: [
            'Social media content creation and scheduling.',
            'Monitoring and responding to audience engagement.',
            'Analytics and performance reporting.'
        ]
    },
    'language-tutoring': {
        title: 'Language Tutoring',
        description: 'Providing ESL teaching services to enhance language proficiency.',
        tasks: [
            'ESL teaching for beginners to advanced students.',
            'Customized lesson planning.',
            'One-on-one and group tutoring sessions.'
        ]
    },
    'email-marketing': {
        title: 'Email Marketing',
        description: 'Creating and managing effective email campaigns to reach your audience.',
        tasks: [
            'Designing email newsletters and promotional content.',
            'Managing subscriber lists.',
            'Analyzing campaign performance.'
        ]
    },
    'bookkeeping': {
        title: 'Bookkeeping',
        description: 'Handling financial records to keep your business finances organized.',
        tasks: [
            'Basic bookkeeping using QuickBooks.',
            'Invoicing and payment tracking.',
            'Expense tracking and financial reporting.'
        ]
    },
    'research-analysis': {
        title: 'Research & Data Analysis',
        description: 'Conducting market research and analyzing data for business insights.',
        tasks: [
            'Market research and competitor analysis.',
            'Data collection and analysis.',
            'Reporting and insights generation.'
        ]
    }
};

// Event Listener for 'Learn More' buttons
detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceKey = button.getAttribute('data-service');
        showModal(serviceKey);
    });
});

// Show Modal Function
function showModal(serviceKey) {
    const service = servicesData[serviceKey];

    // Create Modal Content
    const modalContent = `
        <div class="modal">
            <span class="close-modal">&times;</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `;

    // Insert Modal Content into Modal Container
    modalContainer.innerHTML = modalContent;

    // Display the Modal
    modalContainer.style.display = 'block';

    // Close Modal Event
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    // Close Modal When Clicking Outside the Modal
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
}



// JavaScript for Reveal Animations

// Existing reveal animation code...

// Lightbox Initialization
// (Lightbox2 initializes automatically with default settings)

// JavaScript for Contact Form Validation and Submission

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Validate form fields
        const isValid = validateForm();

        if (isValid) {
            // Show thank-you message
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';

            // Here, add code to send the form data to your email or server
            // You can use EmailJS or Formspree for handling the form submission without server-side code
        }
    });

    function validateForm() {
        let valid = true;

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate Name
        if (name === '') {
            showError('nameError', 'Please enter your name');
            valid = false;
        }

        // Validate Email
        if (email === '') {
            showError('emailError', 'Please enter your email');
            valid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email');
            valid = false;
        }

        // Validate Subject
        if (subject === '') {
            showError('subjectError', 'Please enter a subject');
            valid = false;
        }

        // Validate Message
        if (message === '') {
            showError('messageError', 'Please enter your message');
            valid = false;
        }

        return valid;
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(error => {
            error.textContent = '';
        });
    }

    function isValidEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// JavaScript for Testimonial Slider

// JavaScript for Testimonial Slider

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Variables
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentIndex = 0;

    // Function to Show Testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
            dotsContainer.children[i].classList.toggle('active', i === index);
        });
    }

    // Create Navigation Dots
    function createDots() {
        testimonials.forEach(() => {
            const dot = document.createElement('span');
            dotsContainer.appendChild(dot);
        });
    }

    // Event Listeners for Navigation Arrows
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Event Listeners for Navigation Dots
    function addDotListeners() {
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', () => {
                currentIndex = i;
                showTestimonial(currentIndex);
            });
        }
    }

    // Initialize Slider
    function initSlider() {
        if (testimonials.length > 0) {
            createDots();
            showTestimonial(currentIndex);
            addDotListeners();
        }
    }

    initSlider();
});