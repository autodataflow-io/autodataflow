// ========================================
// CONTACT FORM HANDLING
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.service || !data.message) {
                showError('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showError('Please enter a valid email address.');
                return;
            }

            // Disable submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                // TODO: Replace with your actual form submission endpoint
                // Options:
                // 1. Formspree: https://formspree.io/
                // 2. Netlify Forms: https://www.netlify.com/products/forms/
                // 3. Your own backend API

                // Simulate API call (replace with real endpoint)
                await simulateFormSubmission(data);

                // Show success message
                showSuccess();

                // Reset form
                contactForm.reset();

            } catch (error) {
                console.error('Form submission error:', error);
                showError();
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // Show success message
    function showSuccess() {
        contactForm.style.display = 'none';
        formError.style.display = 'none';
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Show error message
    function showError(message = null) {
        formSuccess.style.display = 'none';
        formError.style.display = 'block';

        if (message) {
            const errorP = formError.querySelector('p');
            errorP.textContent = message;
        }

        formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Simulate form submission (replace with real API call)
    async function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% success rate for demo)
                if (Math.random() > 0.1) {
                    console.log('Form data:', data);
                    resolve();
                } else {
                    reject(new Error('Simulated error'));
                }
            }, 1500);
        });
    }

    // Real form submission example using Formspree
    /*
    async function submitToFormspree(data) {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }

        return response.json();
    }
    */

    // Character counter for message field (optional enhancement)
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.addEventListener('input', () => {
            const length = messageField.value.length;
            const minLength = 50;

            if (length > 0 && length < minLength) {
                messageField.style.borderColor = '#ffc107';
            } else if (length >= minLength) {
                messageField.style.borderColor = '#28a745';
            } else {
                messageField.style.borderColor = '';
            }
        });
    }
});

// Log contact page load
console.log('📞 Contact page loaded');
console.log('📧 Form ready for submission');
console.log('💡 Tip: Replace form submission with your actual endpoint');
