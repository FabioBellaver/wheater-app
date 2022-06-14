import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';
import DefaultCard from './components/DefaultCard';
import NotFoundCard from './components/NotFoundCard';
import Icons from './components/Icons';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city)
      .then((response) => {
        setData(response);
        setCityNotFound(false);
        setSent(true);
        setCity('');
      })
      .catch(() => {
        setCityNotFound(true);
        setSent(false);
      });
  };

  return (
    <main className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-80 flex flex-col p-4 sm:relative items-center justify-center"
      >
        <input
          type="text"
          placeholder="City"
          className="p-3 rounded-lg w-full outline-blue-600"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 duration-300 ease-in-out p-3 mt-[16px] rounded-lg text-white font-medium"
        >
          Search
        </button>
      </form>
      {sent ? <Card data={data} /> : cityNotFound ? <NotFoundCard /> : <DefaultCard />}
      <Icons />
    </main>
  );
}

export default App;
