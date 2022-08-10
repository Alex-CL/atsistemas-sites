import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material'
import { Actions, Field } from './types'
import { styled } from "@mui/material/styles";

type HeadProps<T> = {
  readonly fields: Field<T>[]
  readonly actions?: Actions<T>
}

export function Head<T extends { [key: string]: any }>(props: HeadProps<T>) {

  const head =  {
      fontWeight: 'bold',
      backgroundColor: '#FFFFFF',
      color: '#515151',
      fontSize: '14px',
      borderBottom: '3px solid #17754e',
    }
    
    const actions = {
      fontWeight: 'bold',
      backgroundColor: '#FFFFFF',
      color: '#515151',
      fontSize: '14px',
      borderBottom: '3px solid #17754e',
    }
    
  const headCells = Object.values(props.fields).map((f) => (
    <TableCell sx={head} key={f.name as string}>
        {f.label}
    </TableCell>
  ))

  return (
    <TableHead>
      <TableRow>
        {headCells}
        {props.actions && props.actions.actionsColumn && (
          <TableCell sx={actions}>{props.actions.actionsColumn}</TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}
