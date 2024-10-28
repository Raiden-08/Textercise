import {
    Box,
    Container,
    Button,
    Text,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useHistory } from "react-router";
  
  // import Login from "./Login";
  // import Signup from "./Signup";
  
  export const Homepage = () => {
    const history = useHistory();
  
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInfo"));
  
    //   if (user) history.push("/chats");
    // }, [history]);
  
    return (
      <Box
        bgImage="url(https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
      w="100vw" 
      position="relative"
      >
        <Container maxW="100%" centerContent>
          <Box
            d="flex"
            flexDirection="row"
            justifyContent="center"
            p={3}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            boxShadow="md"
            bg="black"
            opacity="0.7"
          >
            <Text
              fontSize="4xl"
              fontFamily="Work sans"
              color="tomato"
              marginLeft="35%"
            >
              Talk-A-Tive
            </Text>
  
            <Button
              onClick={() => history.push("/login")} // Changed path to lowercase
              h="1.75rem"
              color="black"
              bg="tomato"
              size="sm"
              margin="10px"
              marginLeft="25%"
            >
              Login
            </Button>
            <Button
              onClick={() => history.push("/signup")} // Navigate to signup page
              h="1.75rem"
              color="black"
              bg="tomato"
              size="sm"
              margin="10px"
            >
              Signup
            </Button>
          </Box>
  
          <Box
            d="flex"
            flexDirection="row"
            justifyContent="center"
            p={3}
            w="100%"
            h="400px"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            boxShadow="md"
            bg="black"
            opacity="0.7"
          ></Box>
        </Container>
      </Box>
    );
  };
  