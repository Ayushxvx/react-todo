import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <>
        <nav className="flex justify-evenly p-2 m-2 bg-gray-700 text-white font-mono rounded-lg">
            <Link to="/" className="hover:border-b-2 border-white border-solid cursor-pointer">
                Todo List
            </Link>
            <Link to="/about" className="hover:border-b-2 border-white border-solid cursor-pointer">
                About
            </Link>
        </nav>
        </>
    )
}