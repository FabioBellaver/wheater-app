import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';
import DefaultCard from './components/DefaultCard';
import NotFoundCard from './components/NotFoundCard';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);
  const [cityNotFound, setCityNotFound] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city)
      .then((response) => {
        setData(response);
        setCityNotFound(false);
      })
      .catch(() => {
        setCityNotFound(true);
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
          className="w-full bg-blue-600 hover:bg-blue-700 hover:duration-150 p-3 mt-[16px] rounded-lg text-white font-medium"
        >
          Search
        </button>
      </form>
      {!city ? <DefaultCard /> : cityNotFound && <NotFoundCard />}
      {city && !cityNotFound && <Card data={data} />}
    </main>
  );
}

export default App;
