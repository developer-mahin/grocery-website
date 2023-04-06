import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='border-4 border-dashed rounded-full w-10 h-10 border-green-500 animate-spin'>
            </div>
        </div>
    );
};

export default Spinner;