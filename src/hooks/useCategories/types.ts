import React from 'react'

import { Props as CategoryProps } from '../../components/atoms/Category'

export type CATEGORY_STATUS = 'basic' | 'approved' | 'disapproved' | 'deselected' | 'uncheck'

export interface iCategory {
  name: string;
  status?: CATEGORY_STATUS
}

interface Params {
  allCategories: iCategory[];
  mode: 'view' | 'reviewing' | 'selecting';
  defaultApproved?: boolean;
  initialSelectedCategories?: iCategory[];
  categoryCustomProps?: CategoryProps
}

// eslint-disable-next-line no-unused-vars
export type useCategoriesType = (config: Params) => [
  iCategory[],
  () => React.ReactNode,
  iCategory[],
  (newCategory: iCategory) => void
]
