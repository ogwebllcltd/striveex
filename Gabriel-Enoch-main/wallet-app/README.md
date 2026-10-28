# 💳 Professional Wallet Application

A modern, responsive, and fully functional digital wallet application built with **HTML**, **CSS**, and **JavaScript**. This application provides a seamless user experience for managing finances and accessing various financial services.

## 📱 Features

### Core Features
- **User Dashboard**: Welcome screen with user profile and account status
- **Balance Management**: Display main balance with currency switching (NGN/USD)
- **Balance Visibility**: Toggle to hide/show balance for privacy
- **Dark/Light Mode**: Theme switching for comfortable viewing
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)

### Financial Services
1. **Gift Cards** - Buy and sell digital gift cards from popular platforms
2. **eSim** - Activate eSIM services for various networks
3. **Airtime** - Purchase airtime for any mobile network
4. **Data** - Buy data bundles with various plans
5. **Cable TV** - Subscribe to cable television services
6. **Electricity** - Pay electricity bills online
7. **Buy Number** - Purchase phone numbers
8. **More Services** - Housing, Transportation, Food, Healthcare, Education, Insurance, Travel, and Loans

### Additional Features
- **Daily Gift Card Rates**: Real-time exchange rates for gift cards
- **Quick Services Grid**: Easy access to all services
- **Bottom Navigation**: Quick navigation between different sections
- **Transaction Modals**: Confirmation dialogs for transactions
- **Success Animations**: Visual feedback for completed actions
- **Search Functionality**: Search for services and products
- **Form Validation**: Proper form handling for user inputs

## 🛠 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality and dynamic content
- **SVG Icons** - Lightweight, scalable icons
- **CSS Custom Properties** - Theme variables for easy customization

## 📁 Project Structure

```
wallet-app/
├── index.html          # Main HTML file
├── styles.css          # Comprehensive styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation (this file)
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #2563eb (Blue)
- **Secondary Color**: #10b981 (Green)
- **Dark Background**: #0f172a
- **Card Background**: #1e293b
- **Text Primary**: #ffffff
- **Text Secondary**: #cbd5e1

### Responsive Breakpoints
- **Desktop**: 480px and above
- **Tablet**: 360px - 480px
- **Mobile**: Below 360px

### Animations
- **Slide In**: Page transitions
- **Fade In**: Modal appearances
- **Scale In**: Success icons
- **Hover Effects**: Interactive feedback on buttons and cards

## 🚀 Getting Started

### Installation
1. Clone the repository or download the files
2. No build process required - just open `index.html` in your browser

### Usage
1. Open the application in any modern web browser
2. Navigate through different services using the bottom navigation or service grid
3. Click on any service to view detailed options
4. Use the theme toggle (sun icon) to switch between dark and light modes
5. Click the eye icon to hide/show your balance

## 🎯 Service Pages

### Gift Cards Page
- Search for gift cards
- Browse popular platforms (Amazon, Google Play, Netflix, iTunes, Steam, Spotify)
- View prices and buy now options
- Responsive card layout

### eSim Page
- Information about eSIM services
- Network providers (MTN, Airtel, Glo, 9mobile)
- One-click activation buttons

### Airtime Page
- Network selection dropdown
- Phone number input
- Amount selection
- Quick package buttons (₦100 - ₦10,000)
- Recent transaction history

### Data Page
- Network and phone number selection
- Multiple data plan options (100MB - 10GB)
- Pricing information
- Validity period display

### Cable TV Page
- Provider selection (DStv, GoTV, Startimes, TSTV)
- Smartcard number input
- Package options with pricing
- Monthly subscription details

### Electricity Page
- DISCO (Distribution Company) selection
- Meter number input
- Amount specification
- Quick amount buttons (₦1,000 - ₦50,000)

### Buy Number Page
- Network and number type selection
- Available numbers display
- Pricing tiers (Standard, Premium, VIP)
- Purchase options

### More Services Page
- Grid layout with additional services
- Housing, Transportation, Food & Dining
- Healthcare, Education, Insurance
- Travel, and Loans options

## 📱 Navigation

### Bottom Navigation Bar
- **Home**: Main dashboard
- **Wallet**: Wallet management
- **Chat**: Messaging (placeholder)
- **Status**: Account status
- **User**: User profile and settings

## 💻 JavaScript Functions

### Core Functions
- `initializeApp()` - Initialize application on load
- `setupEventListeners()` - Set up all event listeners
- `toggleTheme()` - Switch between dark and light mode
- `toggleBalance()` - Hide/show balance
- `handleServiceClick()` - Handle service selection
- `showServicePage()` - Display service page dynamically
- `setupServicePageListeners()` - Set up page-specific listeners
- `showConfirmation()` - Display confirmation modal
- `processTransaction()` - Process and confirm transactions

### Service Templates
Each service has its own HTML template that is dynamically inserted into the DOM when clicked.

## 🎓 Code Examples

### Toggle Theme
```javascript
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}
```

### Handle Service Click
```javascript
function handleServiceClick(e, index) {
    const service = services[index];
    showServicePage(service);
}
```

### Process Transaction
```javascript
function processTransaction(serviceId, action) {
    const modal = document.querySelector('.modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-message">
                <svg>...</svg>
                <h2>Transaction Successful!</h2>
                <p>Your ${action} has been processed.</p>
                <button onclick="location.reload()">Done</button>
            </div>
        </div>
    `;
}
```

## 🔐 Security Features

- **Balance Privacy**: Hide/show balance functionality
- **Local Storage**: Theme preference persistence
- **Input Validation**: Form validation before submission
- **Modal Confirmations**: Transaction confirmation dialogs

## 🌐 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Opera (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Customization

### Change Primary Color
Open `styles.css` and modify:
```css
:root {
    --primary-color: #YOUR_COLOR;
}
```

### Add New Service
1. Add service object to `services` array in `script.js`
2. Create HTML template in `generateServicePage()`
3. Add service styling to `styles.css`

### Modify Animations
Update animation definitions in `styles.css`:
```css
@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

## 📊 Performance

- **Lightweight**: No external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Responsive**: CSS Grid and Flexbox for efficient layouts
- **Smooth Animations**: Hardware-accelerated CSS transforms
- **Mobile Optimized**: Efficient scrolling and touch interactions

## 🐛 Known Issues

- Forms are currently for UI demonstration (no backend integration)
- Transaction processing is simulated
- Data is not persisted (page refresh resets everything)

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real transaction processing
- [ ] Payment gateway integration
- [ ] Transaction history with database
- [ ] User profile customization
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Withdrawal and deposit features

## 📞 Support

For issues or questions:
1. Check the documentation above
2. Review the code comments in JavaScript
3. Inspect the CSS custom properties for styling
4. Test in different browsers

## 📄 License

This project is created by **OG WEB LLC SERVICES** - Gabriel Enoch

## 👨‍💻 Author

**Gabriel Enoch**  
OG WEB LLC SERVICES  
Full Stack Development | Web & App Solutions

- HTML • CSS • JavaScript • React • Node.js • PHP • MySQL
- Building modern, scalable, and responsive web applications

---

**Version**: 1.0.0  
**Last Updated**: 2026-04-27  
**Status**: Active Development
