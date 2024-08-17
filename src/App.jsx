import Header from './Header.jsx'
import HomePage from './HomePage.jsx'
import About from './About.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <body className="bg-gray-800 m-0 p-2">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </body>
    </>
  )
}