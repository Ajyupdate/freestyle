import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
} from '@chakra-ui/react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Select,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { CompanyName } from '../../../component/CompanyName';
import { useEffect, useState } from 'react';
import { useLoggedInContext } from '../../../component/layout/AuthContext';
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
type ITokenProps = {
  isLoggedIn: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Rent',
    href: '#'
  },
  {
    label: 'Buy',
    href: '/buy',
  },
  {
    label: 'Sell',
    href: '/sell/add-property',
  },
  {
    label: 'Agents',
    href: '#',
  },
];
export default function Nav() {
  const { isOpen, onToggle, } = useDisclosure();
  const {data:session, status} = useSession()
  const { isLoggedIn } = useLoggedInContext();
  // console.log(isLoggedIn)
  // console.log(session)
  return (
    <Box   >
      <Flex
        
        minH={'60px'}
        py={{ base: 2 }}
        px={{base: 6, md:'5%'}}
        
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>


        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            {CompanyName}
          </Box>
        </Flex>


        <Flex mt={8} display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
        <Spacer/>

        <Flex mt={2} display={{ base: 'none', md: 'flex' }} ml={10}>
          <SelectAndContact isLoggedIn = {isLoggedIn}/>
        </Flex>
       
        

        <Flex
          //flex={{ base: 1, md: '1' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon mt={1} w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity >
        <MobileNav isLoggedIn={isLoggedIn}/>
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const router = useRouter()
  const path = (router.route)
  // s
  return (
    <Stack direction={'row'} spacing={4 }>
      
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
              
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: 'teal',
                }}
                _active={{
                  borderBottom:"2px dashed blue"
                }}
                >
                
                {navItem.label}
                {`${path}` === navItem.href ? <Box
                    
                    bg="black"
                    marginLeft={4}
                    borderRadius="50%"
                    width="15px"
                    height="15px"
                  /> : 
                  <Box
                    
                    // bg="black"
                    marginLeft={4}
                    borderRadius="50%"
                    width="15px"
                    height="15px"
                  />
                  }
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}


    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({isLoggedIn}: ITokenProps) => {
  return (
    <Stack
      
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
        <Box ml={'5%'}>
          
          {NAV_ITEMS.map((navItem) => (
            
          <MobileNavItem  key={navItem.label} {...navItem} />           
          ))}
          <SelectAndContact isLoggedIn = {isLoggedIn}/>

          {/* <Button
            // my={4}
            mr={4}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#03373A'}
            // href={'#'}
            _hover={{
              bg: '#1CA5AE',
            }}>
            Contact
          </Button>

            <Select variant='unstyled' size='sm' w={20} >
              <option value='option1'>ENG</option>
              <option value='option2'>Option 2</option>  
            </Select> */}
              
        </Box>
      
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}  onClick={children && onToggle}>
      <Flex

        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const SelectAndContact = ({isLoggedIn} : ITokenProps) => {
  const {data:session, status} = useSession()
  
  
  // console.log(session)
  const { isOpen, onOpen, onClose } = useDisclosure()
   function logout(){
    localStorage.removeItem("token");
    
    const token = localStorage.getItem('token');
    console.log(token)
    
   }
  //  console.log(isLoggedIn)
  return(
    <Stack
    flex={{ base: 1, md: 0 }}
    justify={'flex-start'}
    direction={'row'}
    spacing={6}
  >
    {/* {isLoggedIn ?
    <Box onClick={onOpen} cursor="pointer" _hover={{ textDecoration: "underline" }}> 
      <Text fontWeight={500} mt={2}>signOut</Text>
    </Box>
    :
    <Link href='auth/sign-in'> <Text fontWeight={500} mt={2}>Login</Text></Link>
    } */}

    {session?.user ? (
      <>
      {/* <p>{session.user.message}</p> */}
      <button onClick={() => signOut()}>Sign Out</button>
      </>
    ): (
      <button onClick={() => signIn()}>Sign in</button>
    )}

    <Button
      // display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'#03373A'}
      // href={'#'}
      _hover={{
        bg: '#1CA5AE',
      }}>
      Contact
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logout?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Are you sure you want to log out</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={logout}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </Stack> 

  )
}




