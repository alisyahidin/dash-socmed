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
import { openModal as openAlbumModal } from '../../actions/album'

import withNavbar from '../../hoc/withNavbar'
import ProfileCard from '../../components/Card/Profile/'
import PostCard from '../../components/Card/Post/'
import PostDetail from '../../components/PostDetail/'
import AlbumDetail from '../../components/AlbumDetail/'
import Card from '../../components/Card/'
import PostLoader from '../../components/Loader/PostLoader'
import ProfileLoader from '../../components/Loader/ProfileLoader'
import './style.scss'

class Profile extends Component {
  componentDidMount() {
    const { location, fetchSingleUser, match } = this.props

    if (location.pathname !== '/profile') {
      fetchSingleUser(match.params.id)
    } else {
      fetchSingleUser()
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
      fetchSingleUser()
    }
  }

  componentWillUnmount() {
    this.props.clearSingleUser()
  }

  render() {
    const { singleUser, openAlbumModal } = this.props

    return (
      <>
        <Container>
          <Row>
            {singleUser.error && (
              <Col>
                <Card>
                  <h3>{singleUser.error}</h3>
                </Card>
              </Col>
            )}
            {!singleUser.error && (
              <>
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
                        {singleUser.data !== null && singleUser.data.posts.map((post, index) => (
                          <PostCard
                            key={index}
                            author={singleUser.data}
                            {...post} />
                        ))}
                        <PostDetail />
                      </Tab>
                      <Tab eventKey="photos" title="Album Photos">
                        <Tab.Container id="albums" defaultActiveKey="default">
                          <Nav className="mt-3 flex-column">
                            {singleUser.loading && <Card><ProfileLoader /></Card>}
                            {singleUser.data !== null && singleUser.data.albums.map(album => (
                              <Nav.Item key={album.id}>
                                <Nav.Link
                                  onClick={() => openAlbumModal(true, album.id)}
                                  eventKey={album.id}
                                >
                                  {album.title}
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Tab.Container>
                        <AlbumDetail />
                      </Tab>
                    </Tabs>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchSingleUser,
    clearSingleUser,
    openAlbumModal
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withNavbar(Profile)))
