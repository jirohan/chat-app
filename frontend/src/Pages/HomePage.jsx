import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import logo from '../assets/app logo.png'

function Homepage() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'))

    if (user) navigate('/chats')
  }, [navigate])

  return (
    <Container maxW="xl" centerContent>
      <Flex
        justifyContent="center"
        p={3}
        bg="none"
        w="30%"
        m="40px 0 10px 0"
        borderRadius="lg"
      >
        <img src={logo} alt="logo"></img>
      </Flex>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="20px"
        borderWidth="1px"
        boxShadow="1px 2px 9px #006AD3"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
