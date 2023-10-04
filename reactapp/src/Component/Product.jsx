import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const ProductOutput = ({ selectedFlavors }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Define the prices for each selected flavor
  const flavorPrices = {
    Vanilla: 5.99,
    Chocolate: 6.99,
    Strawberry: 4.99,
    Mint: 5.49,
    // Add more flavors and prices as needed
  };

  useEffect(() => {
    // Calculate the total price based on selected flavors
    let total = 0;
    selectedFlavors.forEach((flavor) => {
      total += flavorPrices[flavor];
    });
    setTotalPrice(total);
  }, [selectedFlavors]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product Output
      </Typography>
      <Paper elevation={3} sx={{ padding: '16px' }}>
        <Typography variant="h6" gutterBottom>
          Selected Flavors
        </Typography>
        <List>
          {selectedFlavors.map((flavor) => (
            <div key={flavor}>
              <ListItem>
                <ListItemText primary={flavor} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Total Price
        </Typography>
        <Typography variant="h5" color="primary">
          ${totalPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
          Buy Now
        </Button>
      </Paper>
    </div>
  );
};

export default ProductOutput;
