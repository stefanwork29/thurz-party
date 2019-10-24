import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  height: 100vh;
`

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'calc(100vh + 62px)'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props =>
      props.fit || 'cover'} !important; object-position: ${props =>
  props.position || '50% 50%'} !important;'
  }
`
const ImageCarousel = styled.div`
  margin-top: -62px;
  & img {
    height: calc(100vh + 62px) !important;
  }
  .slick-prev {
    left: 25px;
    z-index: 100;
  }
  .slick-next {
    right: 25px;
  }
`
const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class Hero extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <ImageCarousel> 
          <Slider {...settings}>
            <div>
              <BgImage {...this.props} />
            </div>
            <div>
              <BgImage {...this.props} />
            </div>
            <div>
              <BgImage {...this.props} />
            </div>
          </Slider>
        </ImageCarousel>
        <Overlay>{children}</Overlay>
      </Container>
    )
  }
}

export default Hero
