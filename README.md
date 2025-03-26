# E-Commerce Store

## Overview
A simple e-commerce application built with Next.js, React, and Tailwind CSS. The app fetches products from the Fake Store API and provides basic shopping cart functionality.

## Project Setup

### 1. Clone the Repository

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Next.js Image Domains
Open or create `next.config.js` in the project root:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['fakestoreapi.com']
    }
  };
  
export default nextConfig;

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

### 5. Open in Browser
Open [http://localhost:3000](http://localhost:3000) to view the application

## Features
- Product listing from Fake Store API
- Product detail pages
- Shopping cart functionality

