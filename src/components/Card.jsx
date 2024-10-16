import React from 'react';

function Card(props) {
    return (
        <div className="mb-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg rounded-lg p-6 max-w-md mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">{props.title}</h2>
                <p className="text-gray-600 text-base">{props.content}</p>
            </div>
            <div className="text-right mt-4">
                <button
                    onClick={() => {
                        props.onDeleted(props.id);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}


export default Card;
