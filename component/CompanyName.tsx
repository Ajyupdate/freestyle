import { Heading, Link, Text } from '@chakra-ui/react'

// export const CompanyName = <><Text as={'h4'} fontSize='24px' fontWeight={500}><Text as='span' color='#1CA5AE'>Real</Text ><Text as='span' color='#011213'>Estatery</Text ></Text></>


export const CompanyName = 
    <Link href='/' >
    <Heading fontWeight={550} >
    <Text  as='span' color='#1CA5AE'>Real</Text ><Text as='span' color='#011213'>Estatery</Text >
    </Heading>
    </Link>