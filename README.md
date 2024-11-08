﻿
# DASmedhub

This project is an AI-powered healthcare platform designed to provide users with convenient access to medical resources,
chatbot assistance, and nearby hospital tracking. Built using the MERN stack, this website integrates various 
technologies to enhance user experience and accessibility to healthcare services.

<img align="center" alt="Sample Preview" src="DASmedhub-Project/public/Github-Readme.png">

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

This project is an AI-powered healthcare platform designed to provide users with convenient access to medical resources,
chatbot assistance, and nearby hospital tracking. Built using the MERN stack, this website integrates various 
technologies to enhance user experience and accessibility to healthcare services.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Healthcare Chatbot**: Powered by Gemini API to assist users with common healthcare questions and guidance.
- **Nearby Hospital Locator**: Utilizes Google Location API to help users locate nearby hospitals.
- **Doctor and Patient Management**: Allows doctors to manage patient data and users to book appointments with healthcare specialists.
- **Secure Data Handling**: Patient data is securely managed and stored using MongoDB.
- **Responsive Design**: Built with Tailwind CSS and Material UI for an optimized user experience on various devices.

## Tech Stack

- **APIs**:
    - **Gemini API**: For AI chatbot support
    - **Google Location API**: To track nearby hospitals

- **Frontend**:
    - React.js: For building the user interface.
    - Tailwind CSS: For utility-first responsive design.
    - Material UI: For pre-built components and theming.
    - Daisy UI: For extending Tailwind CSS with ready-to-use components.

- **Backend**:
    - Node.js: For building the server-side logic.
    - Express.js: For handling server routes and API endpoints.

- **Database**:
    - MongoDB: As the database to store user data, courses, and other resources.

- **Validation**:
    - Zod: For schema validation and error handling.

- **Authentication**:
    - JSON Web Tokens (JWT): For secure user authentication and authorization.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Megatron-XCoder/DASMedhub.git
   ```

2. **Install Backend Dependencies**
   ```bash
   cd BACKEND
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd DASmedhub-Project
   npm install
   ```

4. **Start the Application**
    - Open two terminal windows. In one terminal, start the backend server :
   ```bash
   cd BACKEND
   node ./index.js
    ```

    - Open two terminal windows. In one terminal, start the frontend server :
   ```bash
   cd DASmedhub-Project
   npm run dev
   ```

5. **Build Tailwind CSS:**
    - If the project requires building the CSS files, run the build command specified in the project's documentation 
      or package.json scripts. This usually involves a command like:

   ```bash
   npm run build
   ```

## Usage

Once the servers are running, open your web browser and navigate to http://localhost:5000 to access the application. 
You can register as a new user or log in if you already have an account.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any 
contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Add some New Feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request


## License
- This project is licensed under the MIT License. See the LICENSE file for more information.




