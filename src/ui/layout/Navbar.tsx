import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box h={16}>
        <Box
          bg={"rgba(255, 255, 255, 0.7)"}
          px={4}
          boxShadow={"0px 0px 16px 16px rgba(0, 0, 0, 0.05)"}
          position="fixed"
          w={"100%"}
          zIndex={"500"}
          backdropFilter={"blur(4px)"}
        >
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={"7vw"}
          >
            <Box>
              <Image
                h={"2.5rem"}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Aperture_Laboratories_Logo.svg/2560px-Aperture_Laboratories_Logo.svg.png"
                }
              />
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                      border={"1px solid black"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
