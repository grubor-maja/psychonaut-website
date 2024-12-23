# Psychonaut

**Live Site**: [Psychonaut on Render](https://dashboard.render.com/web/srv-csdbp4rqf0us73b34ff0)

Psychonaut is an web application designed for scheduling sessions and contacting a psychologist. The project consists of a frontend (React) and backend (Node.js, Express, MongoDB)

![image](https://github.com/user-attachments/assets/1c5355bb-68b7-48e8-9b37-d797d83d8d8d)



## Technologies

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, MongoDB
- **Hosting**: Render 

## Getting Started

Follow these steps to run the application locally

### Setup Instructions

```bash
# Clone the repository and navigate into it
git clone <your-repository-url>
cd Psychonaut

# Backend Setup
cd backend
npm install

# Create .env file with environment variables
echo "MONGO_URI='mongodb+srv://<username>:<password>@cluster0.l62ab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm start

#Frontend Setup (Open a new terminal tab and proceed with this code)

cd frontend
npm install

# Create .env file with environment variables
echo "REACT_APP_API_URL=http://localhost:5000" > .env

# Start the frontend application
npm start

```

The frontend will be available at http://localhost:3000, and the backend will run on http://localhost:5000

## Environment-variables

**Backend**

-MONGO_URI: MongoDB URI for database connection
-PORT: Port for backend server (default is 5000)

**Frontend**

-REACT_APP_API_URL: URL for the backend API. Update this to the Render backend URL for production


