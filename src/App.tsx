import { RouterProvider } from '@tanstack/react-router';

import './App.css';
import { router } from './routes/config';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
