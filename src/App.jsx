import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
      console.log(response);
    });
  };

  return (
    <main className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          value={city.toLowerCase()}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-medium"
        >
          Search
        </button>
      </form>
      <Card data={data} />
    </main>
  );
}

export default App;
