import React from 'react'
import { SvgIcon } from '@mui/material'

export type Field<T> = {
  readonly name: keyof T
  readonly label: string
  readonly renderFunc?: (field: Field<T>, item: T) => string | JSX.Element
  readonly styleFunc?: (field: Field<T>, item: T) => {}
  readonly sortable?: boolean
  readonly searchable?: boolean
}

export type Pager = {
  readonly page: number
  readonly count: number
  readonly handleChangePage: (event: unknown, newPage: number) => void
  readonly rowsPerPage?: number
  readonly handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type Actions<T> = {
  actionsColumn?: string
  items: ActionItem<T>[]
  readonly styleFunc?: (item: T) => string
}

type ActionItem<T> = {
  readonly label?: string
  readonly icon: JSX.Element
  readonly handler: (item: T) => void
  readonly hidden?: (item: T) => boolean
}
