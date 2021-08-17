import React from 'react';
import {Container} from '@material-ui/core';
import useStyles from './styles';

function ContainerExmp() {
    const classes = useStyles();
    return (
        <div className={classes.master}>
           
           <Container maxWidth='xl'>
               <div className={classes.fluid}>
                    <h1 className={classes.header1}>Fluid Container bounded by maxwidth</h1>
               </div> 
           </Container>
           <Container fixed>
               <div className={classes.fix}>
                    <h1 className={classes.header1}>Fixed Container </h1>
               </div> 
           </Container>
        </div>
    )
}

export default ContainerExmp
