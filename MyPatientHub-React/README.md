
# MyPatientHUB

### Healthcare Management Web Application

MyPatientHUB is a team-based healthcare web application developed using React, JavaScript, HTML, and CSS.

The project aims to provide patients with a user-friendly platform to explore healthcare services, find doctors and clinics, manage dependents, discover healthcare-related products, and access account features.

## Project Overview

The application brings several healthcare-related features together into a single responsive React interface.

The current version focuses on frontend development, component integration, navigation, and user interface functionality.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Git
- GitHub
- Visual Studio Code

## Main Features

### 1. Login
- User-friendly login interface
- Basic email and password validation
- Login success feedback
- Navigation to the Dashboard

### 2. Dashboard
- Healthcare overview
- Patient satisfaction statistics
- Health-related information cards
- Charts and visual indicators
- Responsive layout

### 3. Find Doctor
- Doctor discovery interface
- Healthcare information display
- Integration with the main navigation

### 4. Find Clinic
- Clinic discovery interface
- Clinic-related components
- Navigation between healthcare sections

### 5. Find Marketplace
- Healthcare marketplace interface
- Product and service information
- Product images
- Searchable results table
- Entries-per-page selection

### 6. My Dependents
- Dependent management interface
- Related form components
- Integration with the application navigation

### 7. Chat
- Contact list interface
- Contact search
- Conversation selection
- Demo message sending
- Responsive chat layout

### 8. Settings
- Profile information
- Basic personal information
- Password change interface
- Two-factor authentication interface
- Session management interface
- Account deletion interface

## Navigation

The application provides navigation between its main pages through a shared sidebar and React state-based navigation.

Main sections include:

- Dashboard
- Find Doctor
- Find Clinic
- Find Marketplace
- My Dependents
- Chat
- Settings

## Team Members and Contributions

### Marwa Naikkhwah
**Role: Frontend Developer and Project Integration Lead**

Marwa took primary responsibility for bringing the team's separately developed pages together into one React application.

Her contributions included:

- Developing and improving the Dashboard.
- Working on Find Doctor, My Dependents, and Marketplace-related features.
- Integrating separately developed React components.
- Organizing project files and component imports.
- Connecting the main pages through shared navigation.
- Fixing sidebar navigation issues.
- Troubleshooting login redirection.
- Resolving integration and display issues.
- Improving Marketplace results and image paths.
- Integrating the Chat and Settings interfaces.
- Testing navigation and frontend functionality.
- Managing the Git integration branch, commits, pushes, and Pull Request.

Marwa took primary responsibility for integration, troubleshooting, and preparing the combined frontend application.

### Nahid Rahi
**Role: Frontend Developer**

Nahid contributed frontend components and page implementations, including:

- Login interface
- Find Clinic interface
- Marketplace-related components
- Supporting frontend designs and assets

These contributions were incorporated into the combined React application.

## Development Challenges and Solutions

### 1. Combining Separate Components

**Challenge:** Team members developed different sections separately.

**Solution:** The components were organized and integrated into a shared React application.

### 2. Navigation Between Pages

**Challenge:** Some sidebar links did not navigate to their corresponding pages.

**Solution:** Shared navigation functions were connected to the relevant components.

### 3. Login Redirection

**Challenge:** Successful frontend validation did not initially navigate to the Dashboard.

**Solution:** The login success callback was connected to application navigation.

### 4. Marketplace Image Display

**Challenge:** Some image paths did not point to existing files.

**Solution:** Image paths were updated to reference available project assets.

### 5. Responsive Design

**Challenge:** The interface needed to support different screen sizes.

**Solution:** Responsive layouts and styling were implemented for the application sections.

## Installation and Setup

### Prerequisites

Install Node.js and npm.

### 1. Clone the Repository

```bash
git clone https://github.com/marwanaikkhwah1/MyPatientHUB.git
```

### 2. Open the Project

```bash
cd MyPatientHUB
```

If the React application is inside a subfolder, navigate to the folder containing `package.json`.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local address displayed in the terminal.

### 5. Build for Production

```bash
npm run build
```

## Current Project Status

The integrated frontend includes the main healthcare pages and navigation between the implemented sections.

Some features currently use demonstration data and frontend-only interactions.

Real authentication, live chat, database storage, password updates, and account security operations require backend integration.

## Future Improvements

- Backend authentication
- Database integration
- Real-time messaging
- Doctor appointment booking
- Functional account management
- API integration
- Additional testing and accessibility improvements

## Repository

GitHub:
https://github.com/marwanaikkhwah1/MyPatientHUB

## Project Documentation

Detailed project documentation will be prepared separately.

---

**MyPatientHUB — Team Healthcare Web Application**


## Review changes (20 October 2026)
- Added a searchable **Find Pharmacy** demonstration page and connected it to the sidebar.
- Enabled searches across application sections, demo doctor specialties, clinics, marketplace products and dashboard cards.
- Replaced fixed dashboard chart colors with React-state-driven sample charts, refreshing every 15 seconds. **Not connected to a live health API.**
- Corrected missing marketplace logos and tightened responsive spacing.
- Removed unused starter assets and an identical duplicate component; original development history remains in Git.
- Features including payment, actual doctor appointments, live chat, and real-time records require backend services.
