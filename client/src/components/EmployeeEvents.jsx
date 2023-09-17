import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import AddIcon from '@mui/icons-material/Add';
import { Logout, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { FormControl, InputLabel, Paper, Select, Table, TableContainer, TableHead, Menu, MenuItem, Button, Card, Modal, TextField, TableRow, TableBody, ListItemIcon, IconButton, Avatar, Tooltip } from '@mui/material';


const VISIBLE_FIELDS = ['id', 'venue', 'sport', 'date', 'RequestedBy', 'ApprovedBy'];


const EmployeeEvents = () => {
    const initialValues = {
        venue: "",
        sport: "",
        date: ""
    };

    const [values, setValues] = useState(initialValues);
    const [modal, setModal] = useState(false);
    const [allEvents, setAllEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    let user = window.localStorage.getItem("user");
    let userValues = JSON.parse(user);

    useEffect(async () => {
        try {
            await axios.get(`http://localhost:4000/viewEvent`).then((res) => {
                console.log(...res.data.data);
                if (res) {
                    setAllEvents([...res.data.data]);
                }

            })
        }
        catch (err) {
            console.log("Error ", err);
        }
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem("auth");
        window.localStorage.removeItem("user");
        navigate('/login');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };


    const column = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'venue', headerName: 'Venue', width: 150 },
        { field: 'sport', headerName: 'Sport', width: 150 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'RequestedBy', headerName: 'Requested BY', width: 150 },
        { field: 'ApprovedBy', headerName: ' Approved BY', width: 150 },
    ];


    const rows =
        allEvents && allEvents.map((row) => {
            console.log(row)
            return (
                {
                    id: row.id,
                    venue: row.venue,
                    sport: row.sport,
                    date: row.date,
                    RequestedBy: row.RequestedBy,
                    ApprovedBy: row.ApprovedBy
                }
            )
        }
        )

    console.log('row', rows)
    const columns = React.useMemo(
        () => column.filter((column) => VISIBLE_FIELDS.includes(column.field)),
        [column],
    );

    return (

        <>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Tooltip title={userValues?.username}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}

                    >
                        <Avatar sx={{ color: "black" }}>{userValues?.username.length > 0 ? userValues?.username[0] : ""}</Avatar>
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => navigate('/user-profile')}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        View Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>

            <h2 style={{ margin: "3rem 0" }}>All Events</h2>

            <Box sx={{ height: 400, width: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        filter: {
                            filterModel: {
                                items: [],
                                quickFilterValues: [''],
                            },
                        },
                    }}
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }} />
            </Box>


        </>
    );
}

export default EmployeeEvents;
