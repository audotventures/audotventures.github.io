import React from 'react'

import {
  ThemeProvider,
  StyleReset,
  Div,
  Text,
  Anchor,
  Col, 
  Row,
} from 'atomize'

const theme = {
  colors: {
    black900: '#1d1d1e',
  },
}

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
          <Div
            textColor="black900"
            w="80%"
            h="90%"
            maxW="800px"
            minW="600px"
            m={{ x: 'auto', y: '2rem', }}
            p={{ x: '2rem', y: '2rem', }}
            d="flex"
            justify="center"
            flexDir="column"
          >
            <Div
              p={{ x: '1rem', y: '1rem', }}
              d="flex"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text
                tag="h1"
                textSize="display1"
                fontFamily="secondary"
                textWeight="500"
                p={{ x: '1rem', y: '1rem', }}
              >
                Welcome to my life
              </Text>
            </Div>
            {
              <Text p={{ x: '1rem', y: '1rem', }}>
                I am a Software Engineer who studied Computer Science & Mathematics and knows more genetics than your average biologist. The curiosity I have for developmental biology and genomics inspired me to pursue a technical background in computer science and molecular genetics. It is incredibly motivating looking back on the knowledge I have accumulated, to realize how my areas of expertise can work together and answer questions at the intersection of computer science and biotechnology.
              </Text>
            }
            {
              <Text p={{ x: '1rem', y: '1rem', }}>
                When I am not thinking about recombinant DNA and/or deployments of full stack cloud applications, I enjoy blogging about fashion and lifesyle on Pinterest. I love playing and competing in sports, especially badminton, golf, power lifting, and skiing. I cheer for the Golden State Warriors and the San Francisco 49ers and absolutely love watching my favorite NBA and NFL teams competing head to head every week.
              </Text>
            }
            {
              <Text p={{ x: '1rem', y: '1rem', }}>
                While the best chapters of my life are being written, I am living my best life because life is too precious to spend even a single second unhappy. I hope being who I am will start redefining the boundaries of happiness, success and hard work.
              </Text>
            }
            <Div d="flex" justify="space-around" align="center" p={{ x: '1rem', y: '2rem', }}>
              <Row>
                <Col size={{ xs: 'auto', }}>
                  <Div p="1rem">
                    <Anchor href="https://www.linkedin.com/in/edotau/" target="_self" textColor="info800" textDecor="none" hoverTextColor="info900">
                      Linkedin
                    </Anchor>
                    </Div>
                  </Col>
                  <Col size={{ xs: 'auto', }}>
                    <Div p="1rem">
                      <Anchor href="https://github.com/edotau" target="_self" textColor="info800" textDecor="none" hoverTextColor="info900">
                        Github
                      </Anchor>
                      </Div>
                  </Col>
                <Col size={{ xs: 'auto', }}>
                  <Div p="1rem">
                    <Anchor href="https://www.pinterest.com/edotau/redefined/" target="_self" textColor="info800" textDecor="none" hoverTextColor="info900" >
                      Pinterest
                    </Anchor>
                    </Div>
                  </Col>
                  <Col size={{ xs: 'auto', }}>
                    <Div p="1rem">
                      <Anchor href="https://www.instagram.com/_edotau/" target="_self" textColor="info800" textDecor="none" hoverTextColor="info900">
                        Instagram
                      </Anchor>
                      </Div>
                  </Col>
                </Row>
              </Div>
          </Div>
    </ThemeProvider>
  )
}
