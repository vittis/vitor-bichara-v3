import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import brainnit from '../images/brainnit.png'
import castleArena from '../images/castle-arena.jpg'
import acidGames from '../images/acid-games.jpg'
import dogQuote from '../images/dog-quote.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ProjectsCheckMore = styled.div`
  ${tw`text-center text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-4 md:pt-24`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Vitor.
        </BigTitle>
        <Subtitle>
          I create modern web applications for startups and large companies. I also have a background in the gaming
          industry as a game developer.
          {/* I'm also a former game developer. */}
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Brainnit!"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)"
            projectImg={brainnit}
          >
            SaaS learning management system (<strong>LMS</strong>) where I had the pleasure to collaborate as the lead
            frontend developer.
          </ProjectCard>
          <ProjectCard
            title="AcidGames.space"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #279351 0%, #8DC26F 100%)"
            projectImg={acidGames}
          >
            Xiba sam xiba
          </ProjectCard>
          <ProjectCard
            title="CastleArena.io"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #262A33 0%, #13532E 100%)"
            projectImg={castleArena}
          >
            Xiba sam xiba
          </ProjectCard>

          <ProjectCard
            title="Dog & Quote"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #e96443 0%, #904e95 100%)"
            projectImg={dogQuote}
          >
            Xiba sam xiba
          </ProjectCard>
        </ProjectsWrapper>
        <ProjectsCheckMore>
          Be sure to check my{' '}
          <a
            style={{ textDecoration: 'underline', color: 'white' }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vittis"
          >
            <strong>github</strong>
          </a>{' '}
          for all my projects!
        </ProjectsCheckMore>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            {/* The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face. */}
            Oh hey! As you may have noticed, I like to create stuff.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          My non tech hobbies includes reading (I'm very fond of the fantasy genre), playing sports and gaming (board
          games too!). When I'm not doing one of thoses things I'm probably browsing through reddit, laughing at memes
          or reading some tech related articles. I'm also grateful for the very good friends I have and always find
          excuses to hang out with them whenever I can, cheers! 🎉
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
            <br />
            <br />
            If you are interested in working with me you can also check my{' '}
            <a
              style={{ textDecoration: 'underline', color: 'white' }}
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vittis"
            >
              <strong>development skills</strong>
            </a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
