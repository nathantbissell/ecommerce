import React, { Component } from 'react'
import styled from 'styled-components'
import techup from '../techup.png'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1 className='mt-5'>Welcome to TechUp</h1>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
