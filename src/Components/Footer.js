import React from 'react'
import {Grid, makeStyles, Typography} from '@material-ui/core'
 

const useStyle = makeStyles({
    footerStyle:{
        position: 'fixed',
        bottom: '0px',
        background:'blue'
    }
})



function Footer() {

    const classes = useStyle();

    return (
        <Grid container className={classes.footerStyle}>  
                <Typography variant="subtitle2">
                    Footer Area
                </Typography>
        </Grid>
    )
}
 
export default Footer
