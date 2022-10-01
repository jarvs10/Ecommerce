import React from 'react'
import { useParams } from 'react-router-dom'
import Page from '../../components/Page'

const Products = () => {

  const { idShop } = useParams();

  return (
    <Page>
        <h1>Products Page Shop {idShop}</h1>
    </Page>
  )
}

export default Products