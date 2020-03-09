import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Header from '../header'

const NewArticle = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    console.log(values)
    localStorage.setItem(`${values.name}`, values)
  }

  return (
    <div>
      <Header></Header>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          name='name'
          ref={register({
            required: 'Required'
          })}
        />
        {errors.email && errors.email.message}

        <InputStyled
          name='price'
          ref={register({
            required: 'Required'
          })}
        />
        {errors.username && errors.username.message}

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
