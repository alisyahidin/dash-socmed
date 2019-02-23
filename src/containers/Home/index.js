import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../hoc/withNavbar'
import Card from '../../components/Card/'
import PostForm from '../../components/PostForm/'
import Post from '../../components/Card/Post/'

import { fetchPost } from '../../actions/post'

class Home extends Component {
  componentDidMount() {
    this.props.fetchPost()
  }

  render() {
    const { post } = this.props

    return (
      <Container>
        <Row>
          <Col md={8}>
            <Card>
              {post.data.map((data, index) => (
                <Post key={index} {...data} />
              ))}
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <PostForm />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPost
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withNavbar(Home))