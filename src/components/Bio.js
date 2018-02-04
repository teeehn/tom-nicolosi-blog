import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >{
        /*
        <img
          src={profilePic}
          alt={`Tom Nicolosi`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        */
      }
        <p
          style={{
            fontSize: rhythm(1 / 2.5)
          }}
        >
          Tom is a  Web Developer, Engineer, husband, and father who lives in Mission Viejo, CA.
        </p>
      </div>
    )
  }
}

export default Bio
