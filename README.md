# Project Name

Brief description or introduction of your project.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)

### Installing

A step by step series of examples that tell you how to get a development env running:

1. **Frontend Setup:**

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Copy the `.env.example` file and replace `VITE_BACKEND_URL` with your backend URL.
   
   - Run the frontend application:
     ```bash
     npm run dev
     ```

   - Open http://localhost:3000 in your browser.

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd ../backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Copy the `.env.example` file and replace `DATABASE_URL` with your actual database URL and `RESEND_URL` with your resend API URL for sending emails.

   - Run the backend server:
     ```bash
     npm run dev
     ```

   - Open http://localhost:8787 in your browser to access the backend API.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Hono](https://hono.dev/getting-started/cloudflare-workers) - NodeJS runtime built on Chrome's V8 JavaScript engine for cloudflare workers
- [ResendAPI](https://resend.com/) - Send Email to buyer and seller when cliked on I'm Interested
-
- [Other Dependencies...](#)

- [Author Name](https://github.com/author) - Brief description or role of the author.

## License

This project is licensed under the [MIT License](LICENSE).
