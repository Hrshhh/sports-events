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

const dummyEvents = [
    {
        venue: 'Frozen yoghurt',
        sport: "cricket",
        dateTime: "23/09/2023"
    },
    {
        venue: 'Frozen yoghurt',
        sport: "cricket",
        dateTime: "23/09/2023"
    },
    {
        venue: 'Frozen yoghurt',
        sport: "cricket",
        dateTime: "23/09/2023"
    },
    {
        venue: 'Frozen yoghurt',
        sport: "cricket",
        dateTime: "23/09/2023"
    }
];

const EmployeeEvents = () => {
    const initialValues = {
        venue: "",
        sport: "",
        dateTime: ""
    };

    const [values, setValues] = useState(initialValues);

    const [modal, setModal] = useState(false);
    const [allEvents, setAllEvents] = useState(dummyEvents);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:4000/createEvent`, {...values, id: 4}).then((res) => {
                console.log(res);
                allEvents.push(values);
                setValues(initialValues);
                setModal(false);
                
            })
        }
        catch (err) {
            console.log("Error ", err);
        }

    }


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: "3rem 0" }}>Creating Events</h2>
                <Button variant="outlined" onClick={() => setModal(true)}>Create Event</Button>
            </div>

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

            <Modal open={modal}>
                <Card style={{ position: 'absolute', top: '50%', left: '50%', width: "600px", transform: 'translate(-50%, -50%)', padding: "25px" }}>
                    <form onSubmit={handleSubmit}>
                        <h2 >Create Event</h2>
                        <TextField
                            name="venue"
                            type="text"
                            label="Venue"
                            value={values.venue}
                            onChange={handleChange}
                            placeholder="Enter Venue"
                            style={{ width: "100%", marginBottom: "1rem" }}
                            required
                        />

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="game">Game</InputLabel>
                            <Select
                                labelId="game"
                                name="sport"
                                value={values.sport}
                                label="Sport"
                                onChange={handleChange}
                                style={{ width: "100%", marginBottom: "1rem" }}
                                required
                            >
                                <MenuItem value="Cricket">Cricket</MenuItem>
                                <MenuItem value="Badminton">Badminton</MenuItem>
                                <MenuItem value="Hockey">Hockey</MenuItem>
                                <MenuItem value="Carrom">Carrom</MenuItem>
                                <MenuItem value="Table-Tennis">Table-Tennis</MenuItem>
                                <MenuItem value="Chess">Chess</MenuItem>
                                <MenuItem value="Boxing">Boxing</MenuItem>
                                <MenuItem value="Lawn-Tennis">Lawn-Tennis</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            name="dateTime"
                            type="datetime-local"
                            value={values.dateTime}
                            onChange={handleChange}
                            style={{ width: "100%", marginBottom: "1rem" }}
                            required

                        />

                        <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button variant="contained" color="inherit" onClick={() => setModal(false)} style={{marginRight: "1rem"}}>Close</Button>
                            <Button variant="contained" type="submit">Save</Button>
                        </div>

                    </form>
                </Card>
            </Modal>
        </div>
    )
}

export default EmployeeEvents;