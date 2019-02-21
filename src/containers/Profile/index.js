import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Nav,
  Image
} from 'react-bootstrap'

import withNavbar from '../../hoc/withNavbar'
import ProfileCard from '../../components/Card/Profile/'
import PostCard from '../../components/Card/Post/'
import Card from '../../components/Card/'
import './style.css'

import img from '../../assets/images/placeholder.png'

const posts = [
  {
    userId: 1,
    title: 'Learn NextJS',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
  {
    userId: 1,
    title: 'Reactive Programming is Amazing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
]

class Profile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <ProfileCard name="Ali Syahidin" username="alisyahidin" />
          </Col>
          <Col md={8}>
            <Card align="left" className="mb-sm-1">
              <Tabs defaultActiveKey="posts" className="profile-tabs m-sm-0">
                <Tab eventKey="posts" title="Posts">
                  {posts.map((data, index) => (
                    <PostCard author={{ name: 'Ali Syahidin', username: 'alisyahidin'}} key={index} {...data} />
                  ))}
                </Tab>
                <Tab eventKey="photos" title="Photos">
                  <Tab.Container id="albums" defaultActiveKey="first">
                    <Row className="m-sm-0 mt-sm-4">
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Album 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Album 2</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                            <Image className="w-25" src={img} thumbnail />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withNavbar(Profile)
