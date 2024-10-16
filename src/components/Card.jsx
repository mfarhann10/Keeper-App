import React from 'react';

function Card(props) {
    return (
    <div className="mb-6 bg-white shadow-lg rounded-lg p-5 max-w-sm mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="text-center">
            <h2 className='text-xl font-semibold text-gray-800'>{props.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{props.content}</p>
        </div>
    </div>
);
}

export default Card;
