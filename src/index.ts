// Import necessary modules
import express, { Request, Response, NextFunction } from 'express';

// Initialize the Express application
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Define a simple route to return "Hello, World!"
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});