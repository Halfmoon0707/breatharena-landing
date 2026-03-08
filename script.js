// Email Waitlist Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Disable button during submission
        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Submitting...';
        button.disabled = true;
        
        try {
            // Store email locally (temporary solution)
            storeEmailLocally(email);
            
            // TODO: Send to backend/Google Sheets
            // await sendToBackend(email);
            
            // Show success message
            showMessage('🎉 You\'re on the list! We\'ll notify you at launch.', 'success');
            emailInput.value = '';
            
            // Track submission (optional: Google Analytics)
            // gtag('event', 'waitlist_signup', { 'email': email });
            
        } catch (error) {
            console.error('Error submitting email:', error);
            showMessage('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            // Re-enable button
            button.textContent = originalText;
            button.disabled = false;
        }
    });
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show form message
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
    
    // Store email locally (temporary storage)
    function storeEmailLocally(email) {
        let emails = JSON.parse(localStorage.getItem('breatharena_waitlist') || '[]');
        
        // Check for duplicates
        if (!emails.includes(email)) {
            emails.push({
                email: email,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('breatharena_waitlist', JSON.stringify(emails));
        }
    }
    
    // Optional: Send to backend API (implement later)
    async function sendToBackend(email) {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit email');
        }
        
        return response.json();
    }
});

// Optional: Google Sheets integration
// Uncomment and configure when ready
/*
async function sendToGoogleSheets(email) {
    const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
    
    const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            timestamp: new Date().toISOString(),
            source: 'coming_soon_page'
        })
    });
    
    return response;
}
*/
