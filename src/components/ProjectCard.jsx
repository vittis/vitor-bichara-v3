import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import ImageZoom from 'react-medium-image-zoom'

const Wrapper = styled.div`
  width: 100%;
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
  ${tw`shadow-lg relative no-underline rounded-lg pb-4 md:pb-4 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`px-4 opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`px-4 pb-1 text-white text-lg md:text-xl xl:text-xl tracking-wide font-sans pt-1`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, link, children, bg, projectImg, hideMobile }) => (
  <Wrapper className={hideMobile ? 'hide-mobile' : ''} href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <ImageZoom
      image={{
        src: projectImg,
        alt: title,
        style: {
          boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
          height: 'auto',
          maxHeight: '300px',
          width: '100%',
          maxWidth: '530px',
          borderTopRightRadius: '.5rem',
          borderTopLeftRadius: '.5rem',
        },
      }}
      zoomImage={{
        src: projectImg,
        alt: title,
      }}
    />
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.defaultProps = {
  hideMobile: false,
}

ProjectCard.propTypes = {
  hideMobile: PropTypes.bool,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  projectImg: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}
