import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 50px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong>{this.props.text.split(' ').slice(0, 1)}</strong>
          <br />
          {this.props.text
            .split(' ')
            .slice(1)
            .join(' ')}
        </StyledTypist>
      )
    } else {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong key={1}>Party In My Living Room</strong>
          <Typist.Backspace count={0} delay={1500} />
          <span key={2}>
            {' '}
            <strong>Los Angeles, CA</strong>
          </span>
          <Typist.Backspace count={0} delay={1500} />
          <span key={3}>
            {' '}
            <strong>
              Performances by Tiffany Gouche, Thurz, Iman Omari and many more
            </strong>
          </span>
          <Typist.Backspace count={63} delay={1500} />
          <span key={4}></span>
          <Typist.Delay ms={300} />
          <span key={5}>
            <strong>.</strong>
          </span>
          <Typist.Delay ms={600} />
          <span key={6}>
            <strong>.</strong>
          </span>
          <Typist.Delay ms={900} />
          <span key={7}>
            <strong>.</strong>
          </span>
          <Typist.Backspace count={0} delay={10} />
          <strong key={8}> RSVP NOW press the enevlope below</strong>
        </StyledTypist>
      )
    }
  }
}

export default HeroText
