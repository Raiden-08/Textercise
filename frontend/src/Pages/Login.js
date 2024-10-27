import { Box, Container, Text } from "@chakra-ui/react"; // Import Box, Container, and Text
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import { ChatState } from "../../Context/ChatProvider";

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const { setUser } = ChatState();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Box
      bgImage="url(https://c4.wallpaperflare.com/wallpaper/617/363/732/wave-red-lines-light-wallpaper-preview.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      w="100vw" 
      position="relative"
    >
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
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
          <Text fontSize="4xl" fontFamily="Work sans" color="tomato">
            Talk-A-Tive
          </Text>
        </Box>

        <Box
          bg="black"
          opacity="0.7"
          color="white"
          w="100%"
          h="400px"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="md"
          marginBottom="20px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" color="tomato">
            Log-in
          </Text>
          <VStack spacing="10px">
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                value={email}
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" bg="tomato" color="black" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="blue"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}
              isLoading={loading}
              bg="tomato" color="black"
            >
              Login
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              width="100%"
              onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
              }}
            >
              Get Guest User Credentials
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
