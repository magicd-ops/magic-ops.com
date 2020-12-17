import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from '../style';
import { connect, useSelector } from 'react-redux';
import { actionTest } from '../actions';

import HeaderImage from '../base/headerImage';
import RightPanel from '../base/rightPanel';

function Home({actionTest}) {
    const test = useSelector(state => state.test);
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} sm={12} md={9}>
                <HeaderImage />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Paper className={classes.control}>
                    <RightPanel />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default connect(null, { actionTest })(Home);