// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadTheme();
    setupNavigation();
}

// Theme Toggle
function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    const eyeBtn = document.getElementById('eyeBtn');
    const navItems = document.querySelectorAll('.nav-item');
    const serviceItems = document.querySelectorAll('.service-item');
    const expandBtns = document.querySelectorAll('.expand-btn');

    themeToggle.addEventListener('click', toggleTheme);
    eyeBtn.addEventListener('click', toggleBalance);
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => handleNavigation(e, item));
    });

    serviceItems.forEach((item, index) => {
        item.addEventListener('click', (e) => handleServiceClick(e, index));
    });

    expandBtns.forEach(btn => {
        btn.addEventListener('click', handleCardExpand);
    });
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Balance Toggle
function toggleBalance() {
    const balanceAmount = document.getElementById('balanceAmount');
    const balanceAmountHidden = document.getElementById('balanceAmountHidden');
    const eyeBtn = document.getElementById('eyeBtn');

    balanceAmount.classList.toggle('hidden');
    balanceAmountHidden.classList.toggle('hidden');
    eyeBtn.classList.toggle('active');
}

// Navigation Setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems[0].classList.add('active');
}

function handleNavigation(e, item) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    const page = item.getAttribute('data-page');
    console.log('Navigating to:', page);
    // Add your navigation logic here
}

// Service Items Click Handler
const services = [
    {
        id: 'gift-card',
        name: 'Gift Card',
        icon: '🎁',
        description: 'Buy and sell digital gift cards'
    },
    {
        id: 'esim',
        name: 4: 'eSim',
        icon: '📱',
        description: 'Activate eSim for your device'
    },
    {
        id: 'airtime',
        name: 'Airtime',
        icon: '☎️',
        description: 'Buy airtime for any network'
    },
    {
        id: 'data',
        name: 'Data',
        icon: '📡',
        description: 'Purchase data bundles'
    },
    {
        id: 'cable-tv',
        name: 'Cable TV',
        icon: '📺',
        description: 'Subscribe to cable TV services'
    },
    {
        id: 'electricity',
        name: 'Electricity',
        icon: '⚡',
        description: 'Pay for electricity bills'
    },
    {
        id: 'buy-number',
        name: 'Buy Number',
        icon: '🔢',
        description: 'Purchase phone numbers'
    },
    {
        id: 'more',
        name: 'More',
        icon: '⋯',
        description: 'View more services'
    }
];

function handleServiceClick(e, index) {
    const service = services[index];
    showServicePage(service);
}

function showServicePage(service) {
    const mainContent = document.querySelector('.container');
    const pageHTML = generateServicePage(service);
    mainContent.innerHTML = pageHTML;
    setupServicePageListeners(service);
    window.scrollTo(0, 0);
}

function generateServicePage(service) {
    const templates = {
        'gift-card': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Gift Cards</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="search-box">
                        <input type="text" placeholder="Search gift cards...">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </div>

                    <div class="gift-cards-list">
                        <div class="gift-card-item">
                            <div class="card-logo amazon">
                                <span>AMAZON</span>
                            </div>
                            <div class="card-details">
                                <h3>Amazon Gift Card</h3>
                                <p>₦500 - ₦50,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>

                        <div class="gift-card-item">
                            <div class="card-logo google">
                                <span>GOOGLE</span>
                            </div>
                            <div class="card-details">
                                <h3>Google Play Card</h3>
                                <p>₦500 - ₦50,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>

                        <div class="gift-card-item">
                            <div class="card-logo netflix">
                                <span>NETFLIX</span>
                            </div>
                            <div class="card-details">
                                <h3>Netflix Gift Card</h3>
                                <p>₦1,000 - ₦20,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>

                        <div class="gift-card-item">
                            <div class="card-logo itunes">
                                <span>ITUNES</span>
                            </div>
                            <div class="card-details">
                                <h3>iTunes Gift Card</h3>
                                <p>₦500 - ₦50,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>

                        <div class="gift-card-item">
                            <div class="card-logo steam">
                                <span>STEAM</span>
                            </div>
                            <div class="card-details">
                                <h3>Steam Gift Card</h3>
                                <p>₦1,000 - ₦50,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>

                        <div class="gift-card-item">
                            <div class="card-logo spotify">
                                <span>SPOTIFY</span>
                            </div>
                            <div class="card-details">
                                <h3>Spotify Gift Card</h3>
                                <p>₦500 - ₦10,000</p>
                            </div>
                            <button class="card-action-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'esim': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>eSim Services</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="esim-info">
                        <div class="info-card">
                            <h3>What is eSim?</h3>
                            <p>An eSIM is a digital version of a SIM card that allows you to activate a cellular plan without needing to insert a physical SIM.</p>
                        </div>
                    </div>

                    <div class="esim-providers">
                        <div class="provider-item">
                            <div class="provider-logo mtnn">
                                <span>MTN</span>
                            </div>
                            <h3>MTN eSim</h3>
                            <p>Unlimited data plans</p>
                            <button class="action-btn">Activate</button>
                        </div>

                        <div class="provider-item">
                            <div class="provider-logo airtel">
                                <span>AIRTEL</span>
                            </div>
                            <h3>Airtel eSim</h3>
                            <p>Fast & reliable network</p>
                            <button class="action-btn">Activate</button>
                        </div>

                        <div class="provider-item">
                            <div class="provider-logo glo">
                                <span>GLO</span>
                            </div>
                            <h3>Glo eSim</h3>
                            <p>Affordable plans</p>
                            <button class="action-btn">Activate</button>
                        </div>

                        <div class="provider-item">
                            <div class="provider-logo nine">
                                <span>9MOBILE</span>
                            </div>
                            <h3>9mobile eSim</h3>
                            <p>Best data deals</p>
                            <button class="action-btn">Activate</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'airtime': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Buy Airtime</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="airtime-form">
                        <div class="form-group">
                            <label>Select Network</label>
                            <select class="form-input">
                                <option>MTN Nigeria</option>
                                <option>Airtel Nigeria</option>
                                <option>Glo Nigeria</option>
                                <option>9mobile Nigeria</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" class="form-input" placeholder="Enter phone number">
                        </div>

                        <div class="form-group">
                            <label>Amount (₦)</label>
                            <input type="number" class="form-input" placeholder="Enter amount">
                        </div>

                        <button class="action-btn full-width">Continue</button>
                    </div>

                    <div class="airtime-packages">
                        <h3>Quick Packages</h3>
                        <div class="package-grid">
                            <button class="package-btn">₦100</button>
                            <button class="package-btn">₦500</button>
                            <button class="package-btn">₦1,000</button>
                            <button class="package-btn">₦2,500</button>
                            <button class="package-btn">₦5,000</button>
                            <button class="package-btn">₦10,000</button>
                        </div>
                    </div>

                    <div class="transaction-history">
                        <h3>Recent Transactions</h3>
                        <div class="history-item">
                            <div>
                                <p>MTN Airtime</p>
                                <span>08012345678</span>
                            </div>
                            <span>-₦500</span>
                        </div>
                        <div class="history-item">
                            <div>
                                <p>Airtel Airtime</p>
                                <span>08098765432</span>
                            </div>
                            <span>-₦1,000</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'data': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Buy Data</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="data-form">
                        <div class="form-group">
                            <label>Select Network</label>
                            <select class="form-input">
                                <option>MTN Data Plans</option>
                                <option>Airtel Data Plans</option>
                                <option>Glo Data Plans</option>
                                <option>9mobile Data Plans</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" class="form-input" placeholder="Enter phone number">
                        </div>
                    </div>

                    <div class="data-plans">
                        <h3>Available Plans</h3>
                        
                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>100MB</h4>
                                <p class="plan-price">₦100</p>
                            </div>
                            <p class="plan-duration">Valid for 7 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>500MB</h4>
                                <p class="plan-price">₦500</p>
                            </div>
                            <p class="plan-duration">Valid for 14 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>1GB</h4>
                                <p class="plan-price">₦1,000</p>
                            </div>
                            <p class="plan-duration">Valid for 30 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>2GB</h4>
                                <p class="plan-price">₦2,000</p>
                            </div>
                            <p class="plan-duration">Valid for 30 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>5GB</h4>
                                <p class="plan-price">₦5,000</p>
                            </div>
                            <p class="plan-duration">Valid for 30 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>10GB</h4>
                                <p class="plan-price">₦10,000</p>
                            </div>
                            <p class="plan-duration">Valid for 30 days</p>
                            <button class="action-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'cable-tv': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Cable TV Subscription</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="cable-form">
                        <div class="form-group">
                            <label>Select Provider</label>
                            <select class="form-input">
                                <option>DStv Nigeria</option>
                                <option>GoTV Nigeria</option>
                                <option>Startimes</option>
                                <option>TSTV</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Smartcard Number</label>
                            <input type="text" class="form-input" placeholder="Enter smartcard number">
                        </div>
                    </div>

                    <div class="cable-providers">
                        <h3>Available Providers</h3>

                        <div class="provider-card">
                            <div class="provider-header">
                                <h4>DStv</h4>
                                <div class="provider-logo dstv">📺</div>
                            </div>
                            <div class="package-list">
                                <div class="pkg">
                                    <span>Lite</span>
                                    <span>₦2,900/month</span>
                                </div>
                                <div class="pkg">
                                    <span>Compact</span>
                                    <span>₦4,900/month</span>
                                </div>
                                <div class="pkg">
                                    <span>Premium</span>
                                    <span>₦18,900/month</span>
                                </div>
                            </div>
                            <button class="action-btn">Subscribe</button>
                        </div>

                        <div class="provider-card">
                            <div class="provider-header">
                                <h4>GoTV</h4>
                                <div class="provider-logo gotv">📺</div>
                            </div>
                            <div class="package-list">
                                <div class="pkg">
                                    <span>Lite</span>
                                    <span>₦1,500/month</span>
                                </div>
                                <div class="pkg">
                                    <span>Plus</span>
                                    <span>₦2,500/month</span>
                                </div>
                                <div class="pkg">
                                    <span>Max</span>
                                    <span>₦8,500/month</span>
                                </div>
                            </div>
                            <button class="action-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'electricity': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Pay Electricity</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="electricity-form">
                        <div class="form-group">
                            <label>Select Disco</label>
                            <select class="form-input">
                                <option>AEDC</option>
                                <option>IBEDC</option>
                                <option>KEDCO</option>
                                <option>ENUGU DISCO</option>
                                <option>PHED</option>
                                <option>JED</option>
                                <option>IKEJA ELECTRIC</option>
                                <option>EKEDC</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Meter Number</label>
                            <input type="text" class="form-input" placeholder="Enter meter number">
                        </div>

                        <div class="form-group">
                            <label>Amount (₦)</label>
                            <input type="number" class="form-input" placeholder="Enter amount">
                        </div>

                        <button class="action-btn full-width">Continue Payment</button>
                    </div>

                    <div class="electricity-info">
                        <h3>Quick Amounts</h3>
                        <div class="amount-grid">
                            <button class="amount-btn">₦1,000</button>
                            <button class="amount-btn">₦2,500</button>
                            <button class="amount-btn">₦5,000</button>
                            <button class="amount-btn">₦10,000</button>
                            <button class="amount-btn">₦20,000</button>
                            <button class="amount-btn">₦50,000</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'buy-number': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>Buy Phone Number</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="number-form">
                        <div class="form-group">
                            <label>Select Network</label>
                            <select class="form-input">
                                <option>MTN Nigeria</option>
                                <option>Airtel Nigeria</option>
                                <option>Glo Nigeria</option>
                                <option>9mobile Nigeria</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Number Type</label>
                            <select class="form-input">
                                <option>Standard Number</option>
                                <option>Premium Number</option>
                                <option>VIP Number</option>
                            </select>
                        </div>
                    </div>

                    <div class="numbers-available">
                        <h3>Available Numbers</h3>
                        <div class="number-item">
                            <div class="number-display">0810 123 4567</div>
                            <p>MTN - Standard</p>
                            <p class="price">₦5,000</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="number-item">
                            <div class="number-display">0810 555 1234</div>
                            <p>MTN - Premium</p>
                            <p class="price">₦15,000</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="number-item">
                            <div class="number-display">0810 1 000000</div>
                            <p>MTN - VIP</p>
                            <p class="price">₦50,000</p>
                            <button class="action-btn">Buy Now</button>
                        </div>

                        <div class="number-item">
                            <div class="number-display">0811 234 5678</div>
                            <p>Airtel - Standard</p>
                            <p class="price">₦5,000</p>
                            <button class="action-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        'more': `
            <div class="service-page">
                <div class="page-header">
                    <button class="back-btn" onclick="location.reload()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h1>More Services</h1>
                    <div style="width: 24px;"></div>
                </div>

                <div class="service-content">
                    <div class="more-services-grid">
                        <div class="service-card">
                            <div class="service-icon">🏠</div>
                            <h3>Housing</h3>
                            <p>Pay for housing services</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🚗</div>
                            <h3>Transportation</h3>
                            <p>Book rides and travel</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🍔</div>
                            <h3>Food & Dining</h3>
                            <p>Order food online</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🏥</div>
                            <h3>Healthcare</h3>
                            <p>Healthcare services</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">🎓</div>
                            <h3>Education</h3>
                            <p>Pay tuition fees</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">💳</div>
                            <h3>Insurance</h3>
                            <p>Buy insurance policies</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">✈️</div>
                            <h3>Travel</h3>
                            <p>Book flights & hotels</p>
                            <button class="action-btn">Explore</button>
                        </div>

                        <div class="service-card">
                            <div class="service-icon">💰</div>
                            <h3>Loans</h3>
                            <p>Get instant loans</p>
                            <button class="action-btn">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    return templates[service.id] || `<h1>${service.name}</h1>`;
}

function setupServicePageListeners(service) {
    const actionBtns = document.querySelectorAll('.action-btn, .card-action-btn, .package-btn, .amount-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showConfirmation(service, btn.textContent);
        });
    });

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => location.reload());
    }
}

function showConfirmation(service, action) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Confirm Transaction</h2>
            <p><strong>Service:</strong> ${service.name}</p>
            <p><strong>Action:</strong> ${action}</p>
            <div class="modal-actions">
                <button class="modal-btn cancel" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="modal-btn confirm" onclick="processTransaction('${service.id}', '${action}')">Confirm</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function processTransaction(serviceId, action) {
    const modal = document.querySelector('.modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-message">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="success-icon">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <h2>Transaction Successful!</h2>
                <p>Your ${action} has been processed.</p>
                <button class="modal-btn confirm" onclick="location.reload()">Done</button>
            </div>
        </div>
    `;
}

function handleCardExpand(e) {
    e.stopPropagation();
    const card = e.target.closest('.rate-card');
    card.classList.toggle('expanded');
    const btn = e.target.closest('.expand-btn');
    if (btn) {
        btn.style.transform = card.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0)';
    }
}
