import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/layout";

export const Chatpage = () => {

  const {user}=ChatState()
  return (
    <div style={{ width: "100%" }}>
    {user && <SideDrawer />}
    <Box
    bgImage="url(https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      position="relative" d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user && <MyChats />}
      {user && (
        <Chatbox />
      )}
    </Box>
  </div>
  )
}


