import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Toggle from 'react-toggle'
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

// Images
import avatar from '../images/avatar.jpg'
import brainnit from '../images/brainnit.png'
import castleArena from '../images/castle-arena.jpg'
import acidGames from '../images/acid-games.jpg'
import dogQuote from '../images/dog-quote.png'
import hexsum from '../images/hexsum.png'
import leosrevenge from '../images/leosrevenge.png'
import trojantrip from '../images/trojantrip.png'
import waterWorks from '../images/waterWorks.png'

import './toggle.css' // for ES6 modules

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
  margin-top: 3rem;
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

const ToggleContainer = styled.div`
  ${tw`flex justify-center text-white font-sans text-lg`};
`

const ToggleItem = styled.div`
  ${tw`mr-8 ml-8`};
`

class Index extends React.Component {
  state = {
    webToggle: true,
    gamesToggle: false,
  }

  toggle = () => {
    this.setState(prevState => ({ webToggle: !prevState.webToggle, gamesToggle: !prevState.gamesToggle }))
  }

  render() {
    return (
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
            <ToggleContainer>
              <ToggleItem className="scale">
                <Toggle className="v-bottom" checked={this.state.webToggle} onChange={this.toggle} />
                <span>Web</span>
              </ToggleItem>
              <ToggleItem className="scale">
                <Toggle className="v-bottom" checked={this.state.gamesToggle} onChange={this.toggle} />
                <span>Games</span>
              </ToggleItem>
            </ToggleContainer>
            <ProjectsWrapper>
              {this.state.webToggle && (
                <>
                  <ProjectCard
                    title="Brainnit!"
                    link="https://www.behance.net/gallery/58937147/Freiheit"
                    bg="linear-gradient(to right, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)"
                    projectImg={brainnit}
                  >
                    SaaS learning management system (<strong>LMS</strong>) where I had the pleasure to collaborate as
                    the lead frontend developer.
                  </ProjectCard>
                  <ProjectCard
                    title="Acid Games"
                    link="https://www.behance.net/gallery/43907099/Tomb-Raider"
                    bg="linear-gradient(to right, #292E49 0%, #536976 100%)"
                    projectImg={acidGames}
                  >
                    Online gaming platform where developers can contribute by submitting HTML5 games.
                  </ProjectCard>
                  <ProjectCard
                    title="CastleArena.io"
                    link="https://www.behance.net/gallery/52915793/Harry-Potter"
                    bg="linear-gradient(to right, #093028 0%, #107f3f 100%)"
                    projectImg={castleArena}
                  >
                    HTML5 real-time multiplayer strategy game. Contains a scalable server architecture built with
                    Node.js.
                  </ProjectCard>

                  <ProjectCard
                    title="Dog & Quote"
                    link="https://www.behance.net/gallery/38068151/Eagle"
                    bg="linear-gradient(to right, #e96443 0%, #904e95 100%)"
                    projectImg={dogQuote}
                  >
                    Simple web app that consumes API's to show a dog and a quote dynamically.
                  </ProjectCard>
                </>
              )}
              {this.state.gamesToggle && (
                <>
                  <ProjectCard
                    title="Hexsum"
                    link="https://www.behance.net/gallery/58937147/Freiheit"
                    bg="linear-gradient(to right, #37240A 0%, #106635 100%)"
                    projectImg={hexsum}
                  >
                    Turn-based tatic game where warriors fight on a hexagonal field. Developed with game engine of own
                    authorship.
                  </ProjectCard>
                  <ProjectCard
                    title="Trojan Trip"
                    link="https://www.behance.net/gallery/38068151/Eagle"
                    bg="linear-gradient(to right, #4c2106 0%, #6b0638 50%, #085184 100%)"
                    projectImg={trojantrip}
                  >
                    Bullet hell with progressive difficulty and trippy visuals. Developed in 3 days for{' '}
                    <a href="https://ldjam.com/">Ludum Dare #32</a>.
                  </ProjectCard>
                  <ProjectCard
                    title="Water Works"
                    link="https://www.behance.net/gallery/52915793/Harry-Potter"
                    bg="linear-gradient(to right, #004FF9 0%, #FFF94C 100%)"
                    projectImg={waterWorks}
                  >
                    Game developed in 2 days for{' '}
                    <a
                      style={{ color: 'black' }}
                      href="https://geracaogamer.com/2015/05/06/water-works-e-o-jogo-vencedor-da-jam-kolks-games-geracao-gamer/"
                    >
                      Kolks Game Jam
                    </a>
                    , rated 1st place among the 52 games from all over Brazil.
                  </ProjectCard>
                  <ProjectCard
                    title="Leo's Revenge"
                    link="https://www.behance.net/gallery/43907099/Tomb-Raider"
                    bg="linear-gradient(to right, #DD1A1A 0%, #DFA828 100%)"
                    projectImg={leosrevenge}
                  >
                    Game developed in 34 hours at{' '}
                    <a style={{ color: 'black' }} href="http://jamnerdfestival.com.br/programacao/game-jam/">
                      Jam Nerd Festival 2016
                    </a>
                    . Evaluated in 1st place by the jury thanks to its innovative mechanics.
                  </ProjectCard>
                </>
              )}
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
              for all my projects and details!
            </ProjectsCheckMore>
          </Projects>
          <About offset={3.25}>
            <Title>About</Title>
            <AboutHero>
              <Avatar src={avatar} alt="Vitor Bichara" />
              <AboutSub>Hey there! I'm a web developer currently living in Brasília, Brazil.</AboutSub>
            </AboutHero>
            <AboutDesc>
              My non tech hobbies includes reading (I'm very fond of the fantasy genre), playing sports and gaming
              (board games too!). When I'm not doing one of thoses things I'm probably browsing through reddit, laughing
              at memes or reading some tech related articles. I'm also grateful for the very good friends I have and
              always find excuses to hang out with them whenever I can, cheers! 🎉
            </AboutDesc>
          </About>
          <Contact offset={4}>
            <Inner>
              <Title>Get in touch</Title>
              <ContactText>
                Say <a href="mailto:vitbolb1@gmail.com">Hi</a> or find me on other platforms:{' '}
                <a href="https://www.facebook.com/vitt94">Facebook</a> &{' '}
                <a href="https://www.instagram.com/v.bichara/">Instagram</a>
                <br />
                <br />
                If you are interested in working with me you can also check my development skills on my{' '}
                <a
                  style={{ textDecoration: 'underline', color: 'white' }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/vittis"
                >
                  <strong>GitHub</strong>
                </a>
              </ContactText>
            </Inner>
            <Footer>
              &copy; 2019 <a href="https://www.vitorbichara.com/">Vitor Bichara</a>.
            </Footer>
          </Contact>
        </Parallax>
      </>
    )
  }
}

export default Index
