/** @jsx jsx */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { jsx, css } from '@emotion/core'

const picpath = 'src/pages/notfound/notfound.jpg'
@withRouter
class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <img
          alt="notfoundpic"
          src={picpath}
          css={css`
						max-width: 100%;
						max-height: 100%;
						display: block;
						margin: 0 auto;						 
					 `}
        />
      </div>
    )
  }
}

export default NotFound
