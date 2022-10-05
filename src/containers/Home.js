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
<div style={{...divStyle, flexDirection: 'column'}}>
  <div>
    <img src={logoImg} alt="" />
  </div>
  <Link
    to="https://instagram.com/hesijimbofoodtruck?igshid=YmMyMTA2M2Y="
    target="_blank"
    style={{...divStyle, maxWidth: '15%'}}
  >
    <img src={instaImg} alt="" style={{maxWidth: '15%'}}/>
    <a style={{padding: 5, color: pink}}>@hesijimbofoodtruck</a>
  </Link>
  <div style={{...divStyle, maxWidth: '15%'}}>
    <a style={{color: orange}}>jimmie@hesijimbo.com.au</a>
  </div>
</div>
)
