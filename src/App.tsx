import { Routes, Route, Navigate } from "react-router-dom"

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}