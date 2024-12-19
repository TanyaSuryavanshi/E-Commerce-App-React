# E-Commerce App

This is a modern, responsive e-commerce web application built using **React** and powered by **Vite** for development and bundling.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)

---

## Features
- **Dynamic product listings**: Displays products with relevant details like price, description, and image.
- **Add to cart**: Add and remove products from the cart.
- **Responsive design**: Optimized for mobile, tablet, and desktop.
- **Fast performance**: Leveraging Vite and optimized React rendering.
- **Customizable components**: Easy to extend and modify components.

---

## Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (version 14 or higher).
- **npm** or **yarn**: A package manager for Node.js.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/TanyaSuryavanshi/E-Commerce-App-React
   ```
2. Navigate to the project directory:
   ```bash
   cd e-commerce-app-js-react
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

### Development Server
To start the development server:
```bash
npm run dev
# or
yarn dev
```

### Build for Production
To create an optimized production build:
```bash
npm run build
# or
yarn build
```
The build output will be in the `dist` directory.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

---

## Project Structure
```plaintext
.
├── public/                
├── src/                   # Source directory
│   ├── assets             # Static assets (e.g., images)
│   ├── components/        # Reusable React components
│    ├── product-grid      # Fetching all the products data and renders the product grid
│    ├── product-tile      # Renders each product card showing each product data(e.g., title, description, price, rating) 
│    ├── shopping-cart     # Handles the shopping cart logic and shows the cart items
│    ├── star-rating       # manages the logic for showing the number of stars for the star rating of the product
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## Scripts
Here are the primary npm/yarn scripts available:
- `dev`: Start the development server.
- `build`: Create a production build.
- `preview`: Preview the production build.

---

## Technologies Used
- **React**: Front-end library for building UI.
- **HTML**: For building UI elements.
- **Vite**: Modern build tool for fast development.
- **CSS Modules**: Scoped CSS for styling components.
- **Node.js**: JavaScript runtime.

---


