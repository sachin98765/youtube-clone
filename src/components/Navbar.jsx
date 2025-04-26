import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../public/logo.png"
import { CiSearch } from "react-icons/ci"
import { IoMdMic } from "react-icons/io"
import { RiVideoAddLine } from "react-icons/ri"
import { FaRegBell } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className=" flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer " />
      </div>
      <div className="flex w-[35%]  ">
        <div className="w-[100%] px-3 py-2 rounded-l-full border">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border rounded-r-full bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 bg-gray-100"
        />
      </div>
      <div className=" flex space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <CgProfile size={"32px"} />
      </div>
    </div>
  )
}

export default Navbar
