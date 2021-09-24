import React from 'react'
import withEditCategories from '../../../hoc/withCategoryEdit'
import Layout, { Props as LayoutProps } from '../../templates/Layout'
import GameConfigForm, { Props as GameConfigFormProps } from '../GameConfigForm'

interface Props {
  layoutProps: LayoutProps;
  gameConfigProps: GameConfigFormProps;
  toggleEditing: () => void;
}

const GameConfigWrapper: React.FC<Props> = ({
  layoutProps,
  gameConfigProps,
  toggleEditing
}) => {
  return (
    <Layout {...layoutProps}>
      <GameConfigForm toggleEditing={toggleEditing} {...gameConfigProps}/>
    </Layout>
  )
}

export default withEditCategories(GameConfigWrapper)
