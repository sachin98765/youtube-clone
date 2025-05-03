import React from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { useAuth } from "./context/AuthProvider"

const App = () => {
  const {loading, data} = useAuth()
  console.log(loading)
  console.log(data)
  return (
    <div className="">
      <Navbar />
      <Sidebar/>
    </div>
  )
}

export default App
