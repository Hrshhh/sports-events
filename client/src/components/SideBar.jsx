import { Button, Card, Modal, TextField } from '@mui/material'
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import ApiIcon from '@mui/icons-material/Api';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import SidebarHeader from './SidebarHeader';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const SideBar = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <>
            <Sidebar style={{ height: "100vh" }} collapsed={collapse}>
                <SidebarHeader
                    collapse={collapse}
                    setCollapse={setCollapse}
                />
                <Menu>
                    <SubMenu
                        label="Requested Events"
                        icon={<ApiIcon />}
                    />
                    <SubMenu 
                        label="Events"
                        icon={<AddBoxIcon />}
                    />
                      
                </Menu>
            </Sidebar>
            
             
        </>
    )
}

export default SideBar;