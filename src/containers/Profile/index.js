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
import PostLoader from '../../components/Loader/PostLoader'
import ProfileLoader from '../../components/Loader/ProfileLoader'
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

  componentDidUpdate(prevProps) {
    const {
      location,
      clearSingleUser,
      fetchSingleUser
    } = this.props

    if (prevProps.location.pathname !== location.pathname && location.pathname === '/profile') {
      clearSingleUser()
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
              {singleUser.loading && <Card><ProfileLoader /></Card>}
              {singleUser.data !== null && <ProfileCard user={singleUser.data} />}
            </Col>
            <Col>
              <Card align="left" className="mb-sm-1">
                <Tabs defaultActiveKey="posts" className="profile-tabs m-sm-0">
                  <Tab eventKey="posts" title="Posts">
                    {singleUser.loading && (
                      <Card><PostLoader repeat={3} /></Card>
                    )}
                    {singleUser.data !== null && singleUser.data.posts.map((data, index) => (
                      <PostCard
                        key={index}
                        author={singleUser.data}
                        {...data} />
                    ))}
                  </Tab>
                  <Tab eventKey="photos" title="Album Photos">
                    <Tab.Container id="albums" defaultActiveKey="default">
                      <Row className="m-sm-0 mt-sm-4">
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            {singleUser.data !== null && singleUser.data.albums.map(album => (
                              <Nav.Item key={album.id}>
                                <Nav.Link eventKey={album.id}>{album.title}</Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="default">
                              <div  className="w-100 h-100 d-flex align-items-center justify-content-center">
                                <Image className="w-50" src={img} thumbnail />
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="1">
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                              <Image className="w-25" src={img} thumbnail />
                              <Image className="w-25" src={img} thumbnail />
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
