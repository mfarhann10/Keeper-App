import React from 'react';

function Footer() {
    var date = new Date().getFullYear();
    return (
        <footer className="w-full text-gray-400 py-4 fixed bottom-0 left-0 bg-white shadow-md">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm">&copy; {date} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
