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
}

export default () => (
<div style={{...divStyle, flexDirection: 'column', justifyContent: 'space-between'}}>
  <div>
    <img src={logoImg} alt="" />
  </div>
  <Link
    to="https://instagram.com/hesijimbofoodtruck?igshid=YmMyMTA2M2Y="
    target="_blank"
    style={{...divStyle, height: 10, margin: 5, position: 'absolute', bottom: 100}}
  >
    <img src={instaImg} alt="" style={{ height: 40 }}/>
    <a style={{ margin: 5, color: pink, fontSize: 20 }}>@hesijimbofoodtruck</a>
  </Link>
</div>
)


// <div style={{...divStyle, padding: 10}}>
//   <a style={{color: orange}}>jimmie@hesijimbo.com.au</a>
// </div>
