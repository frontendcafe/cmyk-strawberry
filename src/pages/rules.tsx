import React from 'react'
import CarouselRules from '../components/molecules/CarouselRules'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'
import { useHistory } from 'react-router'

const Rules = () => {
  const history = useHistory()
  return (
    <Layout title='¿Cómo se juega?' onClose={() => history.push(paths.HOME)}>
      <CarouselRules/>
    </Layout>
  )
}

export default Rules
