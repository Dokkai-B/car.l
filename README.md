# car.l

A personal portfolio/website created using Vue.js, designed to showcase my skills, accomplishments, and projects.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a personal website that serves as a digital portfolio. It is built with Vue.js to create a responsive and interactive user experience. The site is divided into sections that highlight my character, skills, and accomplishments, with an emphasis on visual storytelling through animations and transitions.

## Features

- **Responsive Design:** Adapts to various screen sizes for an optimal viewing experience.
- **Smooth Animations:** Uses Vue's built-in transitions for smooth scrolling and animations.
- **Interactive UI:** Includes interactive components to engage users.
- **Modular Code Structure:** Organized into components for easy maintenance and scalability.

## Technologies Used

- **Vue.js 3:** A progressive JavaScript framework for building user interfaces.
- **Vue Router 4:** Official router for Vue.js to handle navigation.
- **Vuex:** State management pattern and library for Vue.js applications.
- **SCSS:** A preprocessor scripting language that is interpreted or compiled into CSS.

## Project Structure

car.l/
│
├── node_modules/ # Installed npm dependencies
├── public/ # Static assets (index.html, images, etc.)
├── src/ # Source files
│ ├── components/ # Reusable Vue components
│ ├── views/ # Views for different routes
│ ├── App.vue # Main Vue component
│ ├── main.js # Entry point for the application
│ ├── router.js # Vue Router configuration
│ └── store.js # Vuex store configuration
│
├── .gitignore # Specifies files and directories to be ignored by Git
├── package.json # Project metadata and dependencies
├── package-lock.json # Auto-generated lockfile for npm
└── README.md # Project overview and documentation (this file)


## Setup and Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dokkai-B/car.l.git
   ```

2. Navigate to the project directory:

   ```bash
   cd car.l
   ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

#### Running the Development Server

To start the development server, run:

    ```bash
    npm run serve
    ```

This will start the app locally, and you can view it in your browser at [http://localhost:8080](http://localhost:8080).

#### Building for Production

To create a production build, run:

    ```bash
    npm run build
    ```