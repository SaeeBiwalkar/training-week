// ATM Application State
let balance = 1000;
let pin = "0124";
let accountNumber = "1234567890";
let incorrectPinCount = 0;
const MAX_PIN_ATTEMPTS = 3;

// Screen Management
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen-panel');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen with animation
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 100);
    
    // Clear form inputs when switching screens
    clearFormInputs();
}

function clearFormInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}

// Navigation Functions
function showMainMenu() {
    showScreen('main-menu');
}

function showWithdrawScreen() {
    showScreen('withdraw-screen');
}

function showChangePinScreen() {
    showScreen('change-pin-screen');
}

// Balance Check Function
function checkBalance() {
    document.getElementById('balance-display').textContent = `$${balance.toFixed(2)}`;
    showScreen('balance-screen');
}

// Withdraw Cash Function
function withdrawCash() {
    const amountInput = document.getElementById('withdraw-amount');
    const pinInput = document.getElementById('withdraw-pin');
    
    const amount = parseFloat(amountInput.value);
    const enteredPin = pinInput.value;
    
    // Validation
    if (!amount || amount <= 0) {
        showMessage('error', 'Invalid Amount', 'Please enter a valid withdrawal amount.');
        return;
    }
    
    if (!enteredPin) {
        showMessage('error', 'PIN Required', 'Please enter your PIN to proceed.');
        return;
    }
    
    // Check if account is locked
    if (incorrectPinCount >= MAX_PIN_ATTEMPTS) {
        showMessage('error', 'Account Locked', 'Your account is locked due to too many incorrect PIN attempts. Please contact customer service.');
        return;
    }
    
    // Verify PIN
    if (enteredPin !== pin) {
        incorrectPinCount++;
        const remainingAttempts = MAX_PIN_ATTEMPTS - incorrectPinCount;
        
        if (remainingAttempts > 0) {
            showMessage('error', 'Incorrect PIN', `Incorrect PIN entered. ${remainingAttempts} attempts remaining.`);
        } else {
            showMessage('error', 'Account Locked', 'Your account has been locked due to too many incorrect PIN attempts.');
        }
        return;
    }
    
    // Check sufficient funds
    if (amount > balance) {
        showMessage('error', 'Insufficient Funds', `Insufficient balance. Your current balance is $${balance.toFixed(2)}.`);
        return;
    }
    
    // Process withdrawal
    balance -= amount;
    incorrectPinCount = 0; // Reset counter on successful transaction
    
    showMessage('success', 'Withdrawal Successful', 
        `$${amount.toFixed(2)} has been withdrawn successfully. Your new balance is $${balance.toFixed(2)}.`);
}

// Change PIN Function
function changePIN() {
    const newPinInput = document.getElementById('new-pin');
    const confirmPinInput = document.getElementById('confirm-pin');
    
    const newPin = newPinInput.value;
    const confirmPin = confirmPinInput.value;
    
    // Validation
    if (!newPin || !confirmPin) {
        showMessage('error', 'Missing Information', 'Please fill in both PIN fields.');
        return;
    }
    
    if (newPin.length !== 4 || isNaN(newPin)) {
        showMessage('error', 'Invalid PIN', 'PIN must be exactly 4 digits.');
        return;
    }
    
    if (newPin !== confirmPin) {
        showMessage('error', 'PIN Mismatch', 'The PINs you entered do not match. Please try again.');
        return;
    }
    
    if (newPin === pin) {
        showMessage('warning', 'Same PIN', 'The new PIN is the same as your current PIN. Please choose a different PIN.');
        return;
    }
    
    // Update PIN
    pin = newPin;
    showMessage('success', 'PIN Changed', 'Your PIN has been successfully updated.');
}

// Message Display Function
function showMessage(type, title, text, callback = null) {
    const messageIcon = document.getElementById('message-icon');
    const messageTitle = document.getElementById('message-title');
    const messageText = document.getElementById('message-text');
    const messageBtn = document.getElementById('message-btn');
    
    // Set icon based on message type
    messageIcon.className = `message-icon ${type}`;
    let iconClass = 'fas fa-info-circle';
    
    switch(type) {
        case 'success':
            iconClass = 'fas fa-check-circle';
            break;
        case 'error':
            iconClass = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            iconClass = 'fas fa-exclamation-triangle';
            break;
    }
    
    messageIcon.innerHTML = `<i class="${iconClass}"></i>`;
    messageTitle.textContent = title;
    messageText.textContent = text;
    
    // Set up button callback
    if (callback) {
        messageBtn.onclick = callback;
    } else {
        messageBtn.onclick = showMainMenu;
    }
    
    showScreen('message-screen');
}

// Exit ATM Function
function exitATM() {
    showMessage('success', 'Thank You', 'Thank you for using SecureBank ATM. Have a great day!', 
        () => showScreen('welcome-screen'));
}

// Input Restrictions
document.addEventListener('DOMContentLoaded', function() {
    // Restrict PIN inputs to numbers only
    const pinInputs = document.querySelectorAll('input[type="password"]');
    pinInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Limit to 4 digits
            if (this.value.length > 4) {
                this.value = this.value.slice(0, 4);
            }
        });
        
        // Prevent paste of non-numeric content
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const numericPaste = paste.replace(/[^0-9]/g, '').slice(0, 4);
            this.value = numericPaste;
        });
    });
    
    // Restrict amount input to valid currency format
    const amountInput = document.getElementById('withdraw-amount');
    if (amountInput) {
        amountInput.addEventListener('input', function(e) {
            let value = this.value;
            
            // Remove any non-numeric characters except decimal point
            value = value.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = value.split('.');
            if (parts.length > 2) {
                value = parts[0] + '.' + parts.slice(1).join('');
            }
            
            // Limit decimal places to 2
            if (parts[1] && parts[1].length > 2) {
                value = parts[0] + '.' + parts[1].slice(0, 2);
            }
            
            this.value = value;
        });
    }
    
    // Add Enter key support for forms
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const activeScreen = document.querySelector('.screen-panel.active');
            if (activeScreen) {
                const primaryBtn = activeScreen.querySelector('.btn-primary');
                if (primaryBtn) {
                    primaryBtn.click();
                }
            }
        }
    });
});

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set initial balance display
    document.getElementById('balance-display').textContent = formatCurrency(balance);
    
    // Add some interactive feedback
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Auto-focus on input fields when screens become active
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('active')) {
                    const firstInput = target.querySelector('input');
                    if (firstInput) {
                        setTimeout(() => firstInput.focus(), 300);
                    }
                }
            }
        });
    });
    
    document.querySelectorAll('.screen-panel').forEach(panel => {
        observer.observe(panel, { attributes: true });
    });
});

// Prevent form submission (since we're handling everything with JavaScript)
document.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Add some security features
window.addEventListener('beforeunload', function() {
    // Clear sensitive data when page is being unloaded
    pin = "0124"; // Reset to default
    incorrectPinCount = 0;
});

// Console warning for security
console.warn('🔒 This is a demo ATM application. Do not enter real banking information.');
console.log('💡 Default PIN is: 0124');
