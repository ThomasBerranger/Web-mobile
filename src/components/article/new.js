import React from 'react'
import styled from 'styled-components'

import Header from '../header'

const NewArticle = () => {
  return (
    <div>
      <Header></Header>
      <FormStyled>
        <NameInputStyled placeholder="Nom de l'article"></NameInputStyled>
        <NameInputStyled placeholder='Prix de vente'></NameInputStyled>
        <SubmitButtonStyled>Poster</SubmitButtonStyled>
      </FormStyled>
    </div>
  )
}

const FormStyled = styled.form`
  width: 100%;
  margin-top: 25%;
  text-align: center;
`

const NameInputStyled = styled.input`
  width: 70%;
  padding: 5px;
  margin: 5% 0;
  border-radius: 5px;
`

const SubmitButtonStyled = styled.form`
  color: #fff;
  margin: 3% 4%;
  padding: 3% 0;
  width: 90%;
  background-color: #4183d7;
  font-size: 105%;
  font-weight: 400;
  border: none;
  border-radius: 5px;
`

export default NewArticle
