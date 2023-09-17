import { styled } from '@mui/material/styles';
import { Paper, Table, TableContainer, TableHead } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import React from 'react'

const Admin = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const rows = [
        {
            name: 'Frozen yoghurt', 
            calories: 159, 
            fat: 6.0, 
            carbs: 24, 
            protein: 4.0
        },
        {
            name: 'Frozen yoghurt', 
            calories: 159, 
            fat: 6.0, 
            carbs: 24, 
            protein: 4.0
        },
        {
            name: 'Frozen yoghurt', 
            calories: 159, 
            fat: 6.0, 
            carbs: 24, 
            protein: 4.0
        },
        {
            name: 'Frozen yoghurt', 
            calories: 159, 
            fat: 6.0, 
            carbs: 24, 
            protein: 4.0
        }
      ];

  return (
    <div>
        <h2 style={{margin: "3rem 0"}}>Approve Pending Requests</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Admin;