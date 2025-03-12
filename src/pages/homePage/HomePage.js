// src/pages/homePage/HomePage.js
import NavBar from '../../views/navbar/NavBar'
import '../../styles.css'

export default function HomePage () {
    return (
        <div className="homepage">
            <NavBar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mt-8">Welcome to AutoReply</h1>
                <p className="text-center text-gray-700 mt-4">This is the homepage of our application.</p>
            </div>
        </div>
    )
}
