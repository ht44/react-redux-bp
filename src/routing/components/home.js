import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <button onClick={() => props.hitAbout()}>Go to about page via redux</button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  hitAbout: () => push('/about')
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home)