import React from 'react';
import propTypes from 'prop-types';

export default function Card({ data }) {
  const {
    location,
    current,
  } = data;

  return (

    <div className="flex flex-col justify-center items-center bg-white p-7 rounded-lg shadow-md w-[288px] h-[350px]">

      <div className="text-center">
        <span className="block text-xl font-medium text-slate-700">{location.name}</span>
        <span className="block text-sm font-normal text-slate-400">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="flex mt-4 mb-4 justify-center">
        <span className="text-8xl font-bold text-slate-700">{current.temp_c}</span>
        <span className="text-2xl font-bold text-slate-700 mt-3">ºC</span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="wheater icon" />
        <span className="text-slate-700 text-center font-medium">{current.condition.text}</span>
      </div>

    </div>

  );
}

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
