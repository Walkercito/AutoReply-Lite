// src/views/navbar/NavBar.js

function NavBar () {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">AutoReply</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-200">About</a></li>
                    <li><a href="/contact" className="text-white hover:text-gray-200">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
