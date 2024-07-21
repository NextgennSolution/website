import React from 'react';

const Title = ({ pram }) => {
  return (
    <div className='text-center'>
      <h1 className='gradient-text sm:text-[45px] font-sans font-bold text-[35px]'>{pram?.title}</h1>
      <p className='lg:text-[19px] text-[12px] text-white font-sans max-w-[700px] m-auto mt-[20px]'>{pram?.description}</p>
    </div>
  );
};

export default Title;
