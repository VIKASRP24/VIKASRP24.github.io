import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#E7FBE6] flex flex-col" style={{ backgroundImage: 'url("https://images.pexels.com/photos/751096/pexels-photo-751096.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Navigation Bar */}
            <header className="bg-[#A28B55] text-white py-4">
                <nav className="container mx-auto flex justify-between items-center px-6">
                    <div className="text-2xl font-bold">
                        <a href="/" className="text-[#CBE2B5] hover:text-[#A28B55] transition duration-300 ease-in-out">
                            FarmMate
                        </a>
                    </div>
                    <div className="space-x-4">
                        <a 
                            href="/login" 
                            className="bg-[#86AB89] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#A28B55] transition duration-300 ease-in-out"
                        >
                            Login
                        </a>
                        <a 
                            href="/signup" 
                            className="bg-[#A28B55] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#86AB89] transition duration-300 ease-in-out"
                        >
                            Sign Up
                        </a>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center p-6">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h1 className="text-4xl font-bold text-[#A28B55] mb-4 hover:text-[#86AB89] transition duration-300 ease-in-out">Welcome to the Assured Contract Farming System</h1>
                    <p className="text-lg text-gray-700 mb-8 hover:text-[#A28B55] transition duration-300 ease-in-out">Connecting Farmers and Buyers for Stable Market Access</p>
                </div>
            </main>

            {/* Contact Us Section */}
            <section className="bg-[#CBE2B5] py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#A28B55] mb-4 hover:text-[#86AB89] transition duration-300 ease-in-out">Contact Us</h2>
                    <p className="text-lg text-gray-700 mb-8 hover:text-[#A28B55] transition duration-300 ease-in-out">
                        Have any questions or need support? Reach out to us!
                    </p>
                    <a 
                        href="mailto:vikasrp2004@gmail.com" 
                        className="bg-[#86AB89] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#A28B55] transition duration-300 ease-in-out"
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
