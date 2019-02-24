import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Nav,
} from 'react-bootstrap'

import { fetchSingleUser, clearSingleUser } from '../../actions/singleUser'

import withNavbar from '../../hoc/withNavbar'
import ProfileCard from '../../components/Card/Profile/'
import PostCard from '../../components/Card/Post/'
import PostDetail from '../../components/PostDetail/'
import Card from '../../components/Card/'
import Image from '../../components/Image/'
import './style.scss'

import img from '../../assets/images/placeholder.png'

class Profile extends Component {
  componentDidMount() {
    const { location, fetchSingleUser, match } = this.props

    if (location.pathname !== '/profile') {
      fetchSingleUser(match.params.id)
    } else {
      fetchSingleUser(1)
    }
  }

  componentWillUnmount() {
    this.props.clearSingleUser()
  }

  render() {
    const { singleUser } = this.props

    return (
      <>
        <Container>
          <Row>
            <Col md={5}>
              {singleUser.data !== null
                ? <ProfileCard user={singleUser.data} />
                : <Card><h1>Loading</h1></Card>
              }
            </Col>
            <Col>
              <Card align="left" className="mb-sm-1">
                <Tabs defaultActiveKey="posts" className="profile-tabs m-sm-0">
                  <Tab eventKey="posts" title="Posts">
                    {singleUser.data === null && (
                      <h1 className="text-center">Loading</h1>
                    )}
                    {singleUser.data !== null && singleUser.data.posts.map((data, index) => (
                      <PostCard profileDisabled author={singleUser.data || {name: 'Guest', username: 'guest'}} key={index} {...data} />
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
        <PostDetail />
      </>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchSingleUser,
    clearSingleUser
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withNavbar(Profile)))
