import React from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
