import { Box, Button, Container, Heading, Icon, Image, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'


export default function Home() {
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} textAlign="center">
          Hello, I&apos;m a Machine Learning Student  based in Bangladesh!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box >
            <Heading as="h2" variant="page-title">
              Salimul Haq Roni
            </Heading>
            <p>Machine Learning ( Python, Deep Learning )</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >

            <Image

              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              style={{ width: '94px', height: '100px', borderRadius: '50%' }}
              src="/images/profile.jpg"
              alt="Profile image"

            ></Image>
          </Box>
        </Box>


        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>
            Roni is a Machine Learning focused. I;m is passionate about building excellent appllication that improves the lives of those around us. She&apos;ve completed 15+ projects based on react.js with a good UI sense. She thinks everyday life is like programming. If anyone love something they can put beauty into it.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </NextLink>
          </Box>

        </Section>


        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>1999</BioYear>
            Born in Cumilla, Bangladesh.
          </BioSection>

          <BioSection>
            <BioYear>2019 - Present</BioYear>
            Studying English Literature at National University, Bangladesh.
          </BioSection>

          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Works as a Frontend Developer at Lets Dunch.
          </BioSection>

        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>

          <Paragraph>Art, Music, Illustration, Travelling & Coding. </Paragraph>

        </Section>


        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Tamanna14-cpu" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @tamanna14
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/tamanna-akter" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @tamanna-akter
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://web.facebook.com/chayabithy.kusum/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @tamannaBithy
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                tamannabithy14@gmail.com
              </Button>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  )
}
