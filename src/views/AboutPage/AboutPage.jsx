import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
  padding: 70px 10px 10px 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

const Wrapper= styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  padding: 35px;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
`

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
`

const H2 = styled.h2`
  color: #6A6B6D;
  margin: 0;
`

const Body = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid #c3c3c4;
  border-bottom: 1px solid #c3c3c4;
  color: #6A6B6D;
  line-height: 1.5;
  white-space: pre;
`

const Footer = styled.footer`
  display: flex;
  padding-top: 15px;
  color: #6A6B6D;
`

const AuthorLabel = styled.label`
  font-weight: bold;
`

const DateLabel = styled.label`
  font-style: italic;
`

function AboutPage(props) {
  return (
    <Container>
      <Wrapper>
        <Header>
          <H2>About</H2>
        </Header>
        <Body>
          {
            `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies feugiat justo non bibendum. Phasellus dignissim ante eu diam ornare mollis. Sed sit amet commodo leo. Phasellus eu mollis velit. Vivamus vulputate ut dui quis tincidunt. Donec tempor tincidunt eros. Nullam metus metus, maximus et scelerisque sed, pellentesque et felis. Aenean nec quam arcu.

Fusce eu scelerisque dui, vitae bibendum odio. Phasellus semper dolor sapien, at ornare turpis dapibus consequat. Duis congue lectus ut est aliquet varius. Sed mollis luctus justo ut egestas. Nunc auctor elementum libero vitae lacinia. Nullam posuere nisl eget lacinia hendrerit. Fusce congue dapibus dictum. Donec euismod nibh mauris, vitae semper nunc suscipit pulvinar. Maecenas enim felis, ullamcorper vitae justo sit amet, venenatis maximus ex. Vestibulum erat lectus, sollicitudin sed libero vitae, lacinia fringilla velit. Curabitur ac scelerisque sem, et placerat nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit lacinia diam et imperdiet. Proin scelerisque augue erat.

Aenean non metus at lorem tristique consequat. Ut id rutrum leo. Etiam ipsum nisl, pretium in semper at, porttitor varius nulla. Duis tempus risus non erat elementum ultricies. Aliquam hendrerit quam tortor, ut sollicitudin enim consectetur eget. Vestibulum pellentesque tortor vel dictum vestibulum. Ut placerat sagittis commodo. Mauris auctor, est eu lobortis ultricies, magna dolor imperdiet erat, sed sagittis felis tellus et tortor. Aliquam sed mi tempor urna blandit luctus. Etiam magna nibh, euismod a magna nec, convallis sollicitudin risus. Nullam feugiat erat at turpis blandit mattis. Vivamus feugiat, ex in vestibulum eleifend, lorem massa consectetur enim, in vestibulum turpis diam non lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            `
          }
        </Body>
        <Footer>
          <AuthorLabel>Txai Mostardeiro Potier</AuthorLabel>&nbsp;-&nbsp;<DateLabel>redtxai@gmail.com</DateLabel>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default AboutPage
