import React from 'react';

export default function DefaultCard() {
  return (
    <section className="flex justify-center items-center bg-white p-7 rounded-lg shadow-md w-[288px] h-[350px]">
      <div className="flex">
        <p className="text-3xl font-medium text-blue-600 select-none">
          wheater
          <span className="text-slate-700 text-4xl">
            App
          </span>
          <span>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
