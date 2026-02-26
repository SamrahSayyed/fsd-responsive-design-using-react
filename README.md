Responsive Design with React & Bootstrap
This repository contains a collection of modern, fully responsive web components built using React and React Bootstrap. The project focuses on clean UI/UX, efficient state management, and mobile-first design principles.

🚀 Features
1. Contact Form
A sleek, single-page contact form with real-time validation.

Validation: Uses HTML5 and Bootstrap validation states.

Layout: Responsive grid system that stacks on mobile devices.

Components: ContactForm.jsx, UserDashboard.jsx, MultiStep.jsx.

2. Multi-Step Form
A guided user experience for complex data entry.

Progress Tracking: Dynamic ProgressBar that updates based on the current step.

Navigation: "Next" and "Back" functionality with state persistence.

Step Logic: Conditional rendering for Personal Info, Address, and Review stages.

3. Searchable User Dashboard
A data-driven dashboard fetching information from an external API.

Data Fetching: Integration with JSONPlaceholder API using useEffect.

Live Search: High-performance filtering using useMemo.

Responsive Table: Horizontal scrolling on small screens via responsive props.

🛠️ Tech Stack
Frontend: React.js

Styling: React Bootstrap (Bootstrap 5)

Icons: Unicode Symbols / Bootstrap Icons

State Management: React Hooks (useState, useEffect, useMemo)

📦 Installation
Clone the repository:

Bash
git clone https://github.com/SamrahSayyed/fsd-responsive-design-using-react.git
Navigate to the project folder:

Bash
cd fsd-responsive-design-using-react
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm start
📂 Folder Structure
Plaintext
src/
 ┣ components/
 ┃ ┣ ContactForm.jsx        # Single-page contact form
 ┃ ┣ MultiStepForm.jsx      # Multi-step process with progress bar
 ┃ ┗ UserDashboard.jsx      # API-driven searchable table
 ┣ App.js                   # Main entry point
 ┗ index.js                 # Bootstrap CSS imports
📝 Usage Notes
Bootstrap CSS: Ensure import 'bootstrap/dist/css/bootstrap.min.css'; is present in your index.js or App.js.

API Usage: The Dashboard component requires an active internet connection to fetch dummy data from JSONPlaceholder.
