import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Card } from '@mui/material';

const Profile = () => {

    let user = window.localStorage.getItem("user");
    let userValues = JSON.parse(user);
    console.log("sd", userValues)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <AccountCircleIcon style={{ width: "140px", height: "140px" }} />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <Card style={{ padding: "25px", width: "400px" }}>
                    <div>
                        <h4>Name:- {userValues?.username}</h4>
                        <h4>Email:- {userValues?.email}</h4>
                        <h4>Role:- {userValues?.role}</h4>
                    </div>
                </Card>
            </div>
            



        </>
    )
}

export default Profile