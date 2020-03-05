import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const Header = () => {
  const [menu, setMenu] = useState('hidden')
  return (
    <div>
      <Menu animate={menu} variants={menuVariants}>
        <ContentMenuStyled>
          <TitleStyled>
            <Link to={`/`}>leboncoin</Link>
          </TitleStyled>
          <br />
          <br />
          Link
          <br />
          Link
          <br />
          Link
        </ContentMenuStyled>
        <CloseMenuStyled>
          <FontAwesomeIcon
            icon={faTimes}
            size='2x'
            onClick={() => {
              setMenu(menu === 'visible' ? 'hidden' : 'visible')
            }}
          />
        </CloseMenuStyled>
      </Menu>
      <HeaderStyled>
        <MenuStyled>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            onClick={() => {
              setMenu(menu === 'visible' ? 'hidden' : 'visible')
            }}
          />
        </MenuStyled>

        <TitleStyled>
          <Link to={`/`}>leboncoin</Link>
        </TitleStyled>

        <MenuStyled>
          <FontAwesomeIcon icon={faSearch} size='2x' />
        </MenuStyled>
      </HeaderStyled>
    </div>
  )
}

const Menu = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 2;
  display: inline-flex;
`

const menuVariants = {
  visible: {
    x: 0
  },
  hidden: { x: -document.body.clientWidth }
}

const ContentMenuStyled = styled.div`
  padding: 5%;
  width: 80%;
`

const CloseMenuStyled = styled.div`
  padding: 7% 5% 5% 5%;
  width: 10%;
`

const HeaderStyled = styled.header`
  color: #f56b2a !important;
  font-family: Verdana;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  padding: 0.8rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const MenuStyled = styled.div`
  display: inline-block;
`

const TitleStyled = styled.span`
  font-size: 30px;
  margin: 0 45px;
  font-family: 'Open Sans';
  font-weight: bolder;
`

export default Header
