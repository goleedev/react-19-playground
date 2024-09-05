import React, { createContext, useState, use, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function Card() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('Card must be used within a ThemeProvider');
  }
  const { theme, toggleTheme } = context;

  return (
    <div
      className={`max-w-md mx-auto rounded-lg p-6 ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      }`}
    >
      <h1
        className={`text-2xl my-3 ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}
      >
        Theme Card
      </h1>
      <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
        Hello!! use() hook
      </p>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
}
