import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#26262F" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#EFC13B", fontWeight: "bold" }}>Seja bem vindo(a), ao Urbanic Blog!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#EFC13B", fontWeight: "bold" }}>Aqui compartilhamos nossos rolês e experiências, aos arredores da maravilhosa cidade de São Paulo. </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#EFC13B", backgroundColor: "#26262F", color: "#EFC13B" }}>Compartilhe!</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/SoB8B8T.png" alt="Arte feita em um prédio na grande São Paulo" width="500px" height="527px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "#26262F" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;