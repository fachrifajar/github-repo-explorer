# GitHub Repo Explorer

A React-based application to explore GitHub repositories with infinite scrolling, caching, and real-time updates.

## Features

- **Infinite Scrolling**: Seamlessly fetch and display GitHub repositories.
- **Caching**: Optimized API calls using React Query for better performance.
- **Material-UI Integration**: Beautiful and responsive UI components.
- **State Management**: Redux Toolkit for predictable state management.

## Tech Stack

- **Frontend**: React, Material-UI
- **State Management**: Redux Toolkit
- **API Management**: React Query
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fachrifajar/github-repo-explorer.git

2. Navigate to the project dir:
   ```bash
   cd github-repo-explorer

3. Install dependencies:
   ```bash
   npm i 

4. Run the development server:
   ```bash
   npm run dev

## Scripts

- **dev**: Start the development server.
- **build**: Build the project for production.
- **lint**: Run ESLint to check code quality.
- **preview**: Preview the production build.

## Dependencies

### Main

- **@mui/material**: Material-UI components for styling.
- **@reduxjs/toolkit**: Simplified Redux state management.
- **@tanstack/react-query**: Powerful data fetching and caching.
- **react-intersection-observer**: Handle infinite scrolling.
- **axios**: Promise-based HTTP client.

### Dev

- **TypeScript**: Strongly typed JavaScript.
- **ESLint**: Linting and code quality checks.
- **Vite**: Fast development and build tool.

## Usage

1. Search for a GitHub user to view their repositories.
2. Scroll to load more repositories dynamically.
3. View detailed repository information, including stars and descriptions.
