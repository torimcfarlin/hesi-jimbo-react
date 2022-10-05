import React from 'react'
import { Link } from 'react-static'

import logoImg from '../logo_colour.png'
import instaImg from '../insta_logo.png'

const pink = '#e81972'
const yellow = '#ffde17'
const orange = '#e65037'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10
}

export default () => (
<div>
  <div>
    <img src={logoImg} alt="" />
  </div>
  <Link
    to="https://instagram.com/hesijimbofoodtruck?igshid=YmMyMTA2M2Y="
    target="_blank"
    style={divStyle}
  >
    <img src={instaImg} alt="" style={{width: 50}}/>
    <body style={{padding: 5, color: pink}}>@hesijimbofoodtruck</body>
  </Link>
  <div style={divStyle}>
    <body style={{color: orange}}>jimmie@hesijimbo.com.au</body>
  </div>
</div>
)
