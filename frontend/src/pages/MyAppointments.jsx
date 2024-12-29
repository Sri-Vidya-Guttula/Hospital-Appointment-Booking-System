import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium txt-zinc-700 border-b'>My appointments</p>
      <div className='flex flex-col gap-4 sm:gap-6 py-2'>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className='flex flex-col sm:flex-row gap-6 border-b pb-4'
            key={index}
          >
            {/* Image and Text Container Aligned Horizontally */}
            <div className='flex flex-row items-start gap-4 flex-1'>
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600 px-5'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-xs mt-1'>
                  <span>Date & Time:</span> 25, July, 2024 | 8:30 PM
                </p>
              </div>
            </div>

            {/* Buttons positioned at the bottom of the address container on small devices */}
            <div className='sm:hidden flex flex-col gap-2 justify-end mt-4'>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel Appointment
              </button>
            </div>

            {/* Buttons on large devices */}
            <div className='hidden sm:flex flex-col gap-2 justify-end ml-auto'>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
