/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Appnavbar from './Appnavbar';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import axios from 'axios';

function Home() {
  const [selectedSport, setSelectedSport] = useState('Cricket');
  const [sportsDataList, setSportsDataList] = useState([]);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    try {
       axios.get(`http://localhost:4000/viewEquip`).then((res) => {
          console.log(...res.data.data);
          if (res) {
            setSportsDataList([...res.data.data]);
          }

      })
  }
  catch (err) {
      console.log("Error ", err);
  }
  },[])

  console.log(sportsDataList)
  const handleQuantityChange = (itemName, operation) => {
    setSportsDataList((prevData) => {
      const updatedData = [...prevData];
      const sportIndex = updatedData.findIndex((sport) => sport.sport === selectedSport);
      const itemIndex = updatedData[sportIndex].Equipname.findIndex((item) => item.item === itemName);

      if (operation === 'increment') {
        updatedData[sportIndex].Equipname[itemIndex].quantity += 1;
      } else if (operation === 'decrement' && updatedData[sportIndex].Equipname[itemIndex].quantity > 0) {
        updatedData[sportIndex].Equipname[itemIndex].quantity -= 1;
      }

      return updatedData;
    });
  };

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', sportsDataList);
  };

  const sportdata = sportsDataList.find((sport) => sport.sport === selectedSport);


  const handleUpdateEquipment = async (itemName, quantity) => {
    try {
      const response = await fetch(`http://localhost:4000/updateEquip/${selectedSport}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName: itemName,
          quantity: quantity,
          // Add other equipment data as needed
        }),
      });
  
      if (response.status === 200) {
        // Equipment update successful, you can handle success logic here
        console.log('Equipment updated successfully.');
        console.log('Submitted Data:', sportsDataList);
      } else {
        // Handle error cases here
        console.error('Equipment update failed.');
      }
    } catch (error) {
      console.error('Error updating equipment:', error);
    }
  };


  return (
    <>
      <Appnavbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '400px', boxShadow: 'none' }}>
          <h2 style={{ textAlign: 'center' }}>Select Sport</h2>

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="game">Game</InputLabel>
            <Select
              labelId="game"
              value={selectedSport}
              label="Sport"
              onChange={handleSportChange}
              style={{ marginBottom: '1rem' }}
              fullWidth
            >
              {sportsDataList.map((sport) => (
                <MenuItem key={sport.sport} value={sport.sport}>
                  {sport.sport}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Card>
      </div>
      <br />

      {sportdata && (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Card style={{ width: '400px' }}>
            <CardContent>
              <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {sportdata.sport} Equipment
              </Typography>
              <Grid container spacing={2}>
                {sportdata.Equipname.map((item) => (
                  <Grid item xs={12} key={item.item}>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item xs={6}>
                        {item.item}:
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: 'right' }}>
                        <Button variant="contained" onClick={() => handleQuantityChange(item.item, 'decrement')}>
                          -
                        </Button>
                        <span style={{ margin: '0 0.5rem' }}>{item.quantity || 0}</span>
                        <Button variant="contained" onClick={() => handleQuantityChange(item.item, 'increment')}>
                          +
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </div>  
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button variant="contained" color="primary" onClick={handleUpdateEquipment} style={{ marginTop: '1rem' }}>
            Submit
          </Button>
        </div>
        </>
      )}
    </>
  );
}

export default Home;
