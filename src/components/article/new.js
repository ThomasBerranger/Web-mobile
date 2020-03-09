import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Header from '../header'

let articleNumber = Object.keys(localStorage).length

const NewArticle = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    localStorage.setItem(articleNumber, JSON.stringify(values))
    articleNumber++
  }

  return (
    <div>
      <Header></Header>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled name='id' type='hidden' value={articleNumber} />

        <InputStyled
          name='name'
          ref={register({
            required: 'Required'
          })}
        />

        <InputStyled
          name='price'
          ref={register({
            required: 'Required'
          })}
        />

        <InputStyled name='image_url' ref={register({})} />

        <InputStyled name='category' placeholder='Jeux' ref={register({})} />

        <InputStyled
          name='location'
          placeholder='Paris 75000'
          ref={register({})}
        />

        <InputStyled
          name='upload_date'
          type='hidden'
          value="aujourd\'hui"
          ref={register({})}
        />

        <SubmitButtonStyled type='submit'>Submit</SubmitButtonStyled>
      </FormStyled>
    </div>
  )
}

const FormStyled = styled.form`
  width: 100%;
  margin-top: 25%;
  text-align: center;
`

const InputStyled = styled.input`
  width: 70%;
  padding: 10px;
  margin: 5% 0;
  border: 1px solid #4183d7;
  border-radius: 5px;
`

const SubmitButtonStyled = styled.button`
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
