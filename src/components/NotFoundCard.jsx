import React from 'react';

export default function DefaultCard() {
  return (
    <section className="flex justify-center items-center bg-white p-7 rounded-lg shadow-md w-[288px] h-[350px]">
      <div className="text-center">
        <p className="block text-xl font-medium text-slate-700 mb-2">City not found.</p>
        <p className="block text-sm font-normal text-slate-600">Please, try again.</p>
      </div>
    </section>
  );
}
