import React from 'react'
import styled from 'styled-components'

import Header from '../header'
import OfflinePage from '../offline'
import data from '../json/articles.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { useParams } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'

const articles = data['articles']

const Article = () => {
  const articleId = useParams()
  return (
    <div>
      <Header></Header>
      <Offline>
        <OfflinePage></OfflinePage>
      </Offline>
      <Online>
        <LocationStyled>Annonces : {articleId['region']}</LocationStyled>
        {articles.map(article => (
          <ArticleStyled key={article.id}>
            <ImageStyled
              src={article.image_url ? article.image_url : ''}
            ></ImageStyled>
            <InformartionStyled>
              <LikeStyled>
                <FontAwesomeIcon icon={faHeart} />
              </LikeStyled>
              <TitleStyled>{article.name}</TitleStyled>
              <PriceStyled>{article.price} €</PriceStyled>
              <DescriptionStyled>{article.category}</DescriptionStyled>
              <DescriptionStyled>{article.location}</DescriptionStyled>
              <DescriptionStyled>{article.upload_date}</DescriptionStyled>
            </InformartionStyled>
          </ArticleStyled>
        ))}
      </Online>
    </div>
  )
}

const LocationStyled = styled.h3`
  margin: 25% 5% 5% 5%;
  font-weight: 600;
`

const ArticleStyled = styled.div`
  margin: 5% 5%;
  display: flex;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 1px #e6ebef;
`

const LikeStyled = styled.div`
  position: absolute;
  right: 8%;
`

const ImageStyled = styled.div`
  height: 100px;
  width: 100px;
  background: url(${props => props.src}) no-repeat center;
  background-size: 100px;
  border-radius: 5px 0 0 5px;
`

const InformartionStyled = styled.div`
  padding: 2% 0 0 5%;
`

const TitleStyled = styled.div`
  font-weight: 500;
`

const PriceStyled = styled.span`
  color: #f56b2a;
  font-weight: 500;
`

const DescriptionStyled = styled.p`
  margin: 0;
  font-weight: 350;
  font-size: 65%;
  white-space: pre-wrap;
`

export default Article
