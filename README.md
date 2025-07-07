# Cypress Sample Test Automation Framework

This is a sample Cypress test automation framework created for UI testing of web applications. It demonstrates basic project setup, structure, and reusable test code using Cypress.

## 📁 Project Structure
Cypress/
│
├── e2e/ # End-to-end test specifications
│ └── login_demo_spec.js
│ └── google_spec.js
│
├── fixtures/ # Test data (JSON)
│ └── example.json
│
├── support/ # Reusable commands and setup
│ └── commands.js
│ └── e2e.js
│
cypress.config.js # Cypress configuration
package.json # Project metadata and dependencies
.gitignore # Ignored files and folders
## 🛠️ Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## 📦 Installation

```bash
npm install
🚀 Running Tests
Run in Cypress GUI:
npx cypress open
Run in headless mode (CLI):
npx cypress run

📌 Features
Page Object Model (POM) ready structure
Test data managed through fixtures
Custom commands via support/commands.js
Clean .gitignore to avoid pushing large binaries
Modular and scalable

📂 Git Best Practices
Proper .gitignore to exclude Cypress binary and node_modules
Lightweight repo suitable for sharing and CI/CD
Example GitHub Actions workflow can be added for CI (**its purely optional**)

💡 Future Enhancements
Add API testing support
Integrate with GitHub Actions
Add reporting (Allure, Mochawesome, etc.)
Add page objects and environment configs

👨‍💻 Author
Srivani Emani
🔗 GitHub: https://github.com/sv83vj

