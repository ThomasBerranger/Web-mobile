import React from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const OfflinePage = () => {
  return (
    <OfflinePageStyled>
      <ContentStyled>
        <FirstLabelStyled>Une erreur serveur est survenue !</FirstLabelStyled>
        <SecondLabelStyled>
          Désole, la plageque vous souhaitez consulterne peut s'afficher
        </SecondLabelStyled>
        <Link to={`/`}>
          <ButtonStyled>Réessayer</ButtonStyled>
        </Link>
      </ContentStyled>
    </OfflinePageStyled>
  )
}

const OfflinePageStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const ContentStyled = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
`

const FirstLabelStyled = styled.h1`
  font-size: 130%;
  font-weight: 700;
  letter-spacing: 0.5px;
`
const SecondLabelStyled = styled.h2`
  font-size: 85%;
  font-weight: 400;
  color: #96a9ba;
  padding: 0 2%;
`
const ButtonStyled = styled.button`
  color: #fff;
  margin: 3% 4%;
  padding: 4% 0;
  width: 90%;
  background-color: #4183d7;
  font-weight: 400;
  border: none;
  border-radius: 4px;
`

export default OfflinePage
