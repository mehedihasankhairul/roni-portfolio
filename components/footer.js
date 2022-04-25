import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" py="5">
            &copy; {new Date().getFullYear()} Roni Rahman. All Rights Reserved.
        </Box>
    )
}

export default Footer