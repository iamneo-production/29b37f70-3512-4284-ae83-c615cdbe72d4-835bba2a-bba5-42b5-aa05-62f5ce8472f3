import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chart from './Chart';
import Deposits from './Deposits';
import ReceiptIcon from '@mui/icons-material/Receipt';
const buttonStyle = {
  mt: 2,
  ml: 1,
};

const DashContext = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={15}>
            <Card>
              <CardHeader title="FRAGRANCE INSTOCK" />
              <CardContent>
                <Typography variant="h3">216</Typography>
                <Button variant="outlined" startIcon={<DeleteIcon />} sx={buttonStyle}>
                  DELETE FRAGRANCE
                </Button>
                <Button variant="contained" endIcon={<SendIcon />} sx={buttonStyle}>
                  ADD FRAGRANCE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashContext;
