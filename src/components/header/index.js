import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <HeaderStyled>
        <MenuStyled>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </MenuStyled>
        <TitleStyled>leboncoin</TitleStyled>
        <MenuStyled>
          <FontAwesomeIcon icon={faSearch} size='2x' />
        </MenuStyled>
      </HeaderStyled>
    </div>
  )
}

const HeaderStyled = styled.header`
  color: #f56b2a;
  font-family: Verdana;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  padding: 0.8rem;
`

const MenuStyled = styled.div`
  display: inline-block;
`

const TitleStyled = styled.span`
  font-size: 30px;
  margin: 0 16%;
  font-family: 'Open Sans';
  font-weight: bolder;
`

export default Header
