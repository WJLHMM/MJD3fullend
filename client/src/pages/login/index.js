import React, { PureComponent, Suspense } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const LazyHeaderUi = React.lazy(() => import(/* webpackChunkName:"header" */'@/publicui/header'))
const LazyLoginInputUi = React.lazy(() => import(/* webpackChunkName:"logininputui" */'@/pages/login/logininputui'))

@withRouter

class Login extends PureComponent {
  render() {
    return (
      <div
        className="loginwrap"
        style={{
				  backgroundColor: '#fff',
				  height: '710px',
				  width: '100%',
				  maxWidth: '1080px',
				  margin: '0 auto',
				  overflow: 'hidden',
        }}
      >
        <LazyHeaderUi />
        <LazyLoginInputUi />
      </div>
    )
  }
}

export default Login
