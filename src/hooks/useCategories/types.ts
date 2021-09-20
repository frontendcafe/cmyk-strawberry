import React from 'react'

import { Props as CategoryProps } from '../../components/atoms/Category'

export type CATEGORY_STATUS = 'basic' | 'approved' | 'disapproved' | 'deselected' | 'uncheck' | 'invisible'

export interface iCategory {
  name: string;
  status?: CATEGORY_STATUS
}

interface Params {
  allCategories: iCategory[];
  mode: 'view' | 'reviewing' | 'selecting' | 'adding';
  defaultApproved?: boolean;
  initialSelectedCategories?: iCategory[];
  categoryCustomProps?: CategoryProps
}

export type useCategoriesType = (config: Params) => [
  iCategory[],
  () => React.ReactNode,
  iCategory[],
  (newCategory: iCategory) => void
]
