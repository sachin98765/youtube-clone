import React from "react"
import { GoHomeFill } from "react-icons/go"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"
import { FaChevronRight } from "react-icons/fa6"
import { VscHistory } from "react-icons/vsc";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";

import { FaYoutube } from "react-icons/fa6"
import { SiYoutubestudio } from "react-icons/si"
import { SiYoutubekids } from "react-icons/si"
import { SiYoutubemusic } from "react-icons/si"

import { BsFire } from "react-icons/bs";
import { SiTrendmicro } from "react-icons/si"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { PiMusicNotesBold } from "react-icons/pi"
import { PiFilmSlateLight } from "react-icons/pi"
import { CgMediaLive } from "react-icons/cg"
import { SiYoutubegaming } from "react-icons/si"
import { FaRegNewspaper } from "react-icons/fa6"
import { TfiCup } from "react-icons/tfi"
import { PiLightbulbLight } from "react-icons/pi"
import { GiGraduateCap } from "react-icons/gi";
import { TbHanger2 } from "react-icons/tb";
import { SiStylelint } from "react-icons/si"
import { MdPodcasts } from "react-icons/md"

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHomeFill />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ]
  const sidebarItems2 = [
    
    {
      id: 2,
      name: "History",
      icon: <VscHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdPlaylistPlay />,
    },
    {
        id: 4,
        name: "Your Videos",
        icon: <GoVideo />,
      },
      {
        id: 5,
        name: "Watch Later",
        icon: <MdOutlineWatchLater />,
      },
      {
        id: 6,
        name: "Liked Videos",
        icon: <SlLike />,
      }
  ]
  const sidebarItems3 = [
    
    {
      id: 1,
      name: "Trending",
      icon: <BsFire />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
        id: 3,
        name: "Music",
        icon: <PiMusicNotesBold />,
      },
      {
        id: 4,
        name: "Films",
        icon: <PiFilmSlateLight />,
      },
      {
        id: 5,
        name: "Live",
        icon: <CgMediaLive />,
      },
      {
        id: 6,
        name: "Gaming",
        icon: <SiYoutubegaming />,
      },
      {
        id: 7,
        name: "Playlists",
        icon: <MdPlaylistPlay />,
      },
      {
          id: 8,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 9,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
            id: 10,
            name: "Courses",
            icon: <GiGraduateCap />,
          },

        {
          id: 11,
          name: "Fashion & beauty",
          icon: <TbHanger2 />,
        },
        {
            id: 12,
            name: "Podcasts",
            icon: <MdPodcasts />,
          }
  ]
  
  return (
    <div className="px-6 w-[20%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-20">
        {/*----------------- home----------- */}
      <div className="items-center space-y-3">
        {sidebarItems.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          )
        })}
      </div>
      <br />
      <hr />

        {/* ----------you---------- */}
        <div className="mt-4 items-center space-y-3">
            <div className="flex items-center space-x-2">
                <h1>You</h1>
                <FaChevronRight />
            </div>
        {sidebarItems2.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          )
        })}
      </div>
      <br />
      <hr />

      {/* --------Explore------------ */}
      <div className="mt-4 items-center space-y-3">
            <div className="flex items-center space-x-2">
                <h1>Explore</h1>
                <FaChevronRight />
            </div>
        {sidebarItems3.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          )
        })}
      </div>
      <br />
      <hr />

    </div>
  )
}

export default Sidebar
