require('dotenv').config();
const express = require('express');
const cors = require("cors"); 
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(
    cors({
      origin: "http://localhost:3001", // Allow requests only from this origin
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    })
  );

app.use(express.json());
app.use('/api', routes);  
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
