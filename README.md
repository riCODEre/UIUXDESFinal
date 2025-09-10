
# PARMS Clinic - Pet Appointment and Records Management System

![PARMS Clinic Homepage](../IndexShot.png)

## Project Overview
PARMS Clinic is a comprehensive web application designed to streamline pet healthcare management. The system provides an intuitive interface for pet owners to schedule appointments, access medical records, and manage their pets' health needs. For clinic staff, it offers tools to manage appointments, maintain pet health records, and provide efficient veterinary services.

## Features

### For Pet Owners
- **Appointment Scheduling**: Easily book, view, and manage veterinary appointments
- **Pet Management**: Add and update information for multiple pets
- **Medical Records Access**: View pet health records and treatment history
- **Service Information**: Browse available veterinary services

### For Clinic Staff
- **Patient Management**: View and manage pet owner information
- **Appointment Tracking**: Monitor and update appointment schedules
- **Medical Record Management**: Create and update pet health records
- **Diagnostic Tools**: Record and track pet diagnoses and treatments

## Technologies Used
- **HTML5**: For structuring web content
- **CSS/TailwindCSS (v3.4.1)**: For responsive styling and modern UI design
- **JavaScript**: For interactive functionality
- **Font Awesome**: For icons and visual elements

## Project Structure
```
UIUXDES/
├── UIUXDESFinal/             # Main project directory
│   ├── .vscode/              # Editor settings
│   ├── img/                  # Images (pets, backgrounds, icons)
│   ├── js/                   # JavaScript files
│   │   └── indexJs.js        # Main JavaScript functionality
│   ├── node_modules/         # NPM packages
│   ├── Others/               # Design files (Figma, PDFs)
│   ├── View/                 # HTML pages
│   │   ├── index.html        # Homepage
│   │   ├── Login.html        # Authentication page
│   │   ├── Services.html     # Services information
│   │   └── ...               # Other pages
│   ├── package.json          # Project dependencies
│   └── tailwind.config.js    # TailwindCSS configuration
├── FinalProject/             # Earlier version of the project
├── Wireframing/              # Wireframing exercises and examples
│   ├── Exercises/            # Wireframing practice
│   ├── pet-clinic/           # Pet clinic wireframes
│   └── PetLover/             # Additional wireframes
└── Relative File Paths/      # File path exercises
```

## Key Pages
- **Homepage**: Introduction to PARMS Clinic and available services
- **Login/Register**: User authentication and account creation
- **Services**: Detailed information about veterinary services
- **Pet Management**: Add, view, and update pet information
- **Appointment Scheduling**: Book and manage appointments
- **Pet Health Records**: View and manage medical history

## Setup and Installation
1. Clone the repository
2. Navigate to the UIUXDESFinal directory
3. Install dependencies:
   ```
   npm install
   ```
4. For development with TailwindCSS:
   ```
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```
5. Open index.html in your browser or use a local server

## Design Philosophy
PARMS Clinic was designed with a focus on user experience, making pet healthcare management accessible and efficient. The interface prioritizes:
- **Simplicity**: Clean, intuitive navigation
- **Accessibility**: Responsive design for all devices
- **Functionality**: Streamlined workflows for common tasks
- **Visual Appeal**: Modern, professional aesthetic with a pet-friendly touch

## Future Enhancements
- Integration with payment processing systems
- Automated appointment reminders
- Enhanced medical record visualization
- Mobile application development

## Credits
- Developed by ArkiTech
- UI/UX Design: UIUXDES Final Project
- Images: Various sources (see image credits in /img directory)

## License
All Rights Reserved © 2024