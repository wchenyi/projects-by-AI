// DOM elements
const qrInput = document.getElementById('qrInput');
const qrType = document.getElementById('qrType');
const imageInput = document.getElementById('imageInput');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');
const saveOptions = document.querySelector('.save-options');
const generatedCount = document.getElementById('generatedCount');
const savedCount = document.getElementById('savedCount');
const streakCount = document.getElementById('streakCount');
const themeToggle = document.getElementById('themeToggle');
const logoContainer = document.getElementById('logoContainer');

let qrcode = null;
let generatedTotal = 3;
let savedTotal = 0;

// Initialize
function init() {
    updateStreak();
    setupEventListeners();
    updateCounts();
    saveOptions.style.display = 'none';
    loadTheme();
}

// Set up event listeners
function setupEventListeners() {
    generateBtn.addEventListener('click', generateQRCode);
    document.getElementById('savePDF').addEventListener('click', () => saveQRCode('pdf'));
    document.getElementById('saveJPG').addEventListener('click', () => saveQRCode('jpg'));
    document.getElementById('savePNG').addEventListener('click', () => saveQRCode('png'));
    themeToggle.addEventListener('click', toggleTheme);
    qrType.addEventListener('change', handleQRTypeChange);
}

// Handle QR type change
function handleQRTypeChange() {
    if (qrType.value === 'image') {
        qrInput.style.display = 'none';
        imageInput.style.display = 'inline-block';
    } else {
        qrInput.style.display = 'inline-block';
        imageInput.style.display = 'none';
    }
}

// Generate QR Code
function generateQRCode() {
    let data;
    switch (qrType.value) {
        case 'url':
            data = `http://${qrInput.value}`;
            break;
        case 'tel':
            data = `tel:${qrInput.value}`;
            break;
        case 'email':
            data = `mailto:${qrInput.value}`;
            break;
        case 'image':
            const file = imageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    createQRCode(e.target.result);
                };
                reader.readAsDataURL(file);
                return;
            }
            break;
        default:
            data = qrInput.value;
    }

    if (data) {
        createQRCode(data);
    }
}

// Create QR Code
function createQRCode(data) {
    qrcodeDiv.innerHTML = '';
    qrcode = new QRCode(qrcodeDiv, {
        text: data,
        width: 256,
        height: 256,
        colorDark: document.body.classList.contains('dark-mode') ? "#90caf9" : "#4285f4",
        colorLight: document.body.classList.contains('dark-mode') ? "#1e1e1e" : "#ffffff",
    });
    saveOptions.style.display = 'flex';
    updateGeneratedCount();
}

// Update generated count
function updateGeneratedCount() {
    generatedTotal++;
    updateCounts();
}

// Save QR Code
function saveQRCode(format) {
    if (qrcode) {
        console.log(`Saving QR code as ${format}`);
        savedTotal++;
        updateCounts();
    }
}

// Update counts
function updateCounts() {
    generatedCount.textContent = generatedTotal;
    savedCount.textContent = savedTotal;
}

// Update streak
function updateStreak() {
    const lastUse = localStorage.getItem('lastUse');
    const today = new Date().toDateString();
    let streak = parseInt(localStorage.getItem('streak') || '0');

    if (lastUse !== today) {
        if (lastUse === new Date(Date.now() - 86400000).toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
        localStorage.setItem('streak', streak);
        localStorage.setItem('lastUse', today);
    }

    streakCount.textContent = streak;
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    if (qrcode) {
        generateQRCode(); // Regenerate QR code with new colors
    }
    saveTheme();
}

// Save theme preference
function saveTheme() {
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load theme preference
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

// Upload and display logo
function uploadLogo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                logoContainer.innerHTML = '';
                logoContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Initialize the application
init();