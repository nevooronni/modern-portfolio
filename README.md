# Modern Portfolio

This is a React-based portfolio built with Vite, Framer Motion, and React Router.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Move Images**:
    Copy your images from the old `img` folder to `public/img`.
    ```bash
    mkdir -p public/img
    cp ../img/* public/img/
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Structure

*   `src/components`: UI components (Navbar, Hero, ProjectCard, etc.)
*   `src/data`: Content for projects and bio.
*   `src/App.jsx`: Main routing logic.
