
export const DESELECTED_STATE = {
  reviewing: 'disapproved',
  selecting: 'deselected',
  view: 'uncheck'
}

export const APPROVED_STATE = 'approved'

export type CATEGORY_STATUS = 'approved' | 'disapproved' | 'deselected' | 'uncheck'

export interface iCategory {
  name: string;
  status?: CATEGORY_STATUS
}
