# DynamicsMento Frontend Development

This is the frontend web application for DynamicsMento, built using **React**, **Vite**, and **NPM** with Hot Module Replacement (HMR) and ESLint.

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 📋 Prerequisites
Ensure you have **Node.js** installed globally. Check your version with:
```bash
node -v
```

### 🛠️ Installation

1. **Install Dependencies**  
   The library packages are not saved in the repository. Generate your local workspace by running:
   ```bash
   npm install
   ```

2. **Run Local Server**  
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   *Open the URL shown in your terminal (usually `http://localhost:5173`) to view the application.*

---

## 🔧 Technical Stack Details

This workspace uses the official Vite ecosystem configuration:
* **Bundler & Server**: Vite with fast Hot Module Replacement (HMR).
* **Compiler**: Powered by `@vitejs/plugin-react` using [Oxc](https://oxc.rs).
* **Code Quality**: ESLint configuration is set up locally to enforce strict code rules.

### 📦 Available Scripts
* `npm run dev` - Starts development server.
* `npm run build` - Compiles production-ready static assets into the `dist/` directory.
* `npm run lint` - Code syntax check.
