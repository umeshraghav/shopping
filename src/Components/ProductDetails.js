import React, { useState } from 'react'
import {Card, CardContent, CardMedia, CardHeader, Container, Grid, Typography, makeStyles, CardActions, Button } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'


const useStyle = makeStyles({
    productImage:{
        maxHeight:"150px",
        maxWidth:"150px"
    },
    card:{
        width:"23rem",
        height:"auto",
        margin:"1.2rem",
        alignItems:"center"
    },
    media:{
        height: "23rem",
        width:"15rem",
       
    
    }
})



function ProductDetails() {
    const {id} = useParams();
    const {productDetail,getProductDetails, setLoading} = useGlobalContext();
    const classes = useStyle();
 

    useEffect(()=>{
        setLoading(true)
        getProductDetails(id)
        setLoading(false)
    },[id])

  return (
        <>
       
            <Header/>
            <h3>{id}</h3>

                {productDetail? 
                    
                    <Container>
                <Grid container spacing={3}>

                                <Grid item xm={6}   >
                                <Card className={classes.card} raised>
                               
                                <img className={classes.media} src={productDetail.image} title={productDetail.title}/>
                               
                                </Card>

                                </Grid>

                                <Grid item xm={6}>
                                      <Card className={classes.card} raised>
                                         <CardContent>
                                                 <Typography variant="h5">
                                                        {productDetail.title} <br/>
                                                </Typography>

                                                <Typography variant="subtitle1">
                                                        {productDetail.description} <br/>
                                                </Typography>

                                                <Typography variant="h2">
                                                &#8377; {productDetail.price} <br/>
                                                </Typography>

                                                
                                              </CardContent>

                                              <CardActions>
 
                    <Button variant="outlined" color="secondary"> Add To Cart </Button>
                </CardActions>
                                </Card>

                                </Grid>
              
                    
                            

              
                
            </Grid>

            </Container>
                    : <h3>Loading</h3>}


            {/* 
 */}

        <Footer/>
        </>
    )
}


export default ProductDetails
