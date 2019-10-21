import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import HeroText from '../components/HeroText'
import Social from '../components/Social'
import { media } from '../utils/style'
import Img from 'gatsby-image'

const StyledHero = styled(Hero)`
  margin-top: -62px;
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`

const IndexPage = ({ data }) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </StyledHero>
    <Section id="event">
      <h1>Event</h1>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            Party in My Living Room is bringing the house party back in style.
            This is a unique cultural experience bringing live music, alcohol,
            and social engagement all curated by Los Angeles based hiphop artist
            Thurz.
          </p>
<Img fixed={data.image.childImageSharp.fixed} />
        </Box>
      </Flex>
    </Section>
    {/* <Section id="experience" dark>
      <SectionTitle>My Experience</SectionTitle>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Section id="technologies">
      <SectionTitle>My Favorite Technologies</SectionTitle>
      <Technologies edges={data.allLogos.edges} />
    </Section>
    <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
    </Section> */}
    <Section id="rsvp" dark>
      <SectionTitle>RSVP</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
         query indexQuery {
           allSocialJson {
             edges {
               node {
                 url
                 type
               }
             }
           }
           allExperienceJson {
             edges {
               node {
                 id
                 company
                 title
                 start
                 end
               }
             }
           }
           allCertificationsJson {
             edges {
               node {
                 name
                 id
                 start
                 end
                 authority
               }
             }
           }
           allLogos: allImageSharp(
             filter: { original: { src: { regex: "/logo/" } } }
             sort: { fields: original___src }
           ) {
             edges {
               node {
                 id
                 fixed(height: 80, grayscale: true) {
                   ...GatsbyImageSharpFixed_withWebp_tracedSVG
                 }
               }
             }
           }
           hero: allImageSharp(
             filter: { original: { src: { regex: "/hero/" } } }
           ) {
             edges {
               node {
                 id
                 fluid(quality: 100) {
                   ...GatsbyImageSharpFluid_withWebp
                 }
               }
             }
           }
           allEducationJson {
             edges {
               node {
                 id
                 school
                 program
                 start
                 end
               }
             }
           }
         }
         query Images {
           image: file(relativePath: { eq: "lathurz.jpg" }) {
             childImageSharp {
               fixed(width: 400) {
                 ...GatsbyImageSharpFixed
               }
               fluid {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       `
