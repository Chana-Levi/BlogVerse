# BlogVerse
Personal blog platform deployed on Azure

# BlogVerse - Personal Blog Platform

BlogVerse is a simple personal blog platform that allows users to create, view, and summarize blog posts. The application uses React for the frontend, Node.js for the backend, and integrates with the OpenAI API for generating blog post summaries.

---

## **Table of Contents**
1. [Setup Instructions](#setup-instructions)
2. [Deployment Process](#deployment-process)
3. [Architecture Overview](#architecture-overview)
4. [Technologies Used](#technologies-used)
5. [Future Improvements](#future-improvements)
6. [Cloud Deployment](#cloud-deployment)
7. [Project Links](#project-links)
8. [Contact](#contact)

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (version 14+)
- npm or yarn
- OpenAI API key
- Git

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/Chana-Levi/BlogVerse.git
   cd BlogVerse/backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add your environment variables:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:8080`.

---

### **Frontend Setup**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` folder and configure the API base URL:
   ```env
   # Use this for local backend server
   REACT_APP_BASE_URL=http://localhost:8080/api
   
   # Use this for cloud backend server
   REACT_APP_BASE_URL=https://blogversebackend.azurewebsites.net/api
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```
   - For local development, ensure `REACT_APP_BASE_URL` points to the local backend.
   - For cloud deployment, update `REACT_APP_BASE_URL` to point to the cloud backend.

The frontend will run on `http://localhost:3000`.

---

## **Deployment Process**

### **Backend Deployment**
1. Push the backend code to a Git repository.
2. Deploy to Azure App Service or another cloud provider:
   - Create a new Azure App Service.
   - Configure the environment variables:
     - `OPENAI_API_KEY`
     - `JWT_SECRET`
   - Deploy using the following command:
     ```bash
     git push azure main
     ```

### **Frontend Deployment**
1. Build the React frontend:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to a hosting service like **Azure Static Web Apps** or **Vercel**.

---

## **Architecture Overview**

### **Frontend**
- **Framework**: React.js
- **Styling**: React Bootstrap
- **Routing**: React Router
- **API Communication**: Axios

**Features:**
- Responsive design.
- Home page displaying all blog posts.
- Secure login and registration.
- Blog post creation form with summary generation using OpenAI.

---

### **Backend**
- **Framework**: Node.js and Express.js
- **Authentication**: JWT (JSON Web Token)
- **API Endpoints:**
  - `GET /api/posts` - Retrieve all posts.
  - `POST /api/posts` - Create a new post.
  - `GET /api/posts/:id` - Retrieve a single post.
  - `POST /api/posts/summarize` - Generate a post summary.

**Data Persistence**: JSON files.

**LLM Integration**: Summarizes blog posts using OpenAI's GPT-3.5-turbo.

---

## **Technologies Used**

### **Frontend**
- React.js
- React Bootstrap
- Axios
- React Router

### **Backend**
- Node.js
- Express.js
- OpenAI API Integration
- JWT Authentication

### **Deployment**
- Azure App Service for the backend
- Azure Static Web Apps or Vercel for the frontend

---

## **Future Improvements**
1. Migrate from JSON-based storage to a database (e.g., MongoDB or PostgreSQL).
2. Add unit and integration testing.
3. Implement CI/CD pipeline for streamlined deployments.
4. Enhance performance for large-scale blog platforms.
5. Add advanced features:
   - Blog post tagging and categorization.
   - Search functionality.
   - User roles and permissions.

---

## **Cloud Deployment**

The project was deployed to Azure using Docker containers for both frontend and backend. The process involved building Docker images, tagging them, pushing them to Azure Container Registry (ACR), and then configuring them on Azure App Services. Additional configuration and restarts ensured smooth deployment and integration.

---

## **Project Links**
- 🌐 **Frontend:** [https://blogversefrontend.azurewebsites.net/](https://blogversefrontend.azurewebsites.net/)
- 🌐 **Backend API:** [https://blogversebackend.azurewebsites.net/api/posts](https://blogversebackend.azurewebsites.net/api/posts)

---

## **Contact**

**Developer**: Chana Levi  
**GitHub**: [https://github.com/Chana-Levi](https://github.com/Chana-Levi)

---

