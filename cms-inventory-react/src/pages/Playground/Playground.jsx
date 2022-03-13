import React from 'react';
import TableCell from '@mui/material/TableCell';
// services
import { fetchTodo } from 'services/todoServices';

// helpers
import { canAction } from 'helpers';

// components
import TableSimple from 'components/Table/TableSimple';

const tableHeader = [
  {
    label: 'title',
    country: 'vn'
  },
  {
    label: 'author',
    country: 'en'
  }
]

const data =['123', '45']


const tableHeader2 = ['book', 'price']

const data2 =[
  {
    value: 90
  },
  {
    value: 100
  }
]

function Playground() {

  async function handleFetchTodo() {
    try {
      const res = await fetchTodo();
      
      console.log('res: ', res)
    } catch (err) {
      console.log('err: ', err)
    }
  }
  return (
    <div>
      
      <button type="button" onClick={handleFetchTodo}>fetch todo</button>
      
      {canAction('view', 'button') && (
        <button type="button" onClick={handleFetchTodo}>delete user</button>
      )}

      <h3>Table</h3>
      <TableSimple 
        data={data}
        tableHeader={tableHeader}
        renderTableRow={(row, rowIndex) => {
          return (
            <TableCell align='right'>{row}</TableCell>
          )
        }}
        renderTableHeader={(header, headerIndex) => {
          console.log('header:', header)
          return (
            <TableCell align='right'>{header.label}</TableCell>
          )
        }}
      />


      <h3>Table 2</h3>
      <TableSimple 
        data={data2}
        tableHeader={tableHeader2}
        renderTableRow={(row, rowIndex) => {
          return (
            <TableCell align='right'>{row.value}</TableCell>
          )
        }}
        renderTableHeader={(header, headerIndex) => {
          return (
            <TableCell align='right'>{header}</TableCell>
          )
        }}
      />
    </div>
  )
}

export default Playground