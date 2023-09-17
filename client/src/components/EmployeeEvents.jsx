import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, Paper, Select, Table, TableContainer, TableHead, MenuItem } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { Button, Card, Modal, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminEvents = () => {

    const [modal, setModal] = useState(false);
    const [allEvents, setAllEvents] = useState([]);

    useEffect( async () => {
        try {
            await axios.get(`http://localhost:4000/viewEvent`).then((res) => {
                console.log("create event", res.data.data);
                setAllEvents(res.data.data)
            })
        }
        catch(err){
            console.log(err);
        }
    }, [])


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


    return (
        <div>
            <h2 style={{ margin: "3rem 0" }}>All Events</h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Venue</StyledTableCell>
                            <StyledTableCell align="right">Sports</StyledTableCell>
                            <StyledTableCell align="right">Date/Time</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allEvents && allEvents.map((row, number) => (
                            <StyledTableRow key={number}>
                                <StyledTableCell component="th" scope="row">
                                    {row.venue}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.sport}</StyledTableCell>
                                <StyledTableCell align="right">{row.dateTime}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            
        </div>
    )
}

export default AdminEvents;