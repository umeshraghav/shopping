import React from 'react'
import {Card, CardContent, CardMedia, CardHeader, Container, Grid, Typography, makeStyles, CardActions, Button } from '@material-ui/core'
import  Header  from './Header'
import Footer from './Footer'
import { useHistory } from 'react-router'

import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'


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
        height: "25rem",
        width:"20rem",
  
        borderRadius:"12px",
        objectFit:'cover' 
    }
})



function ProductList() {
    
    
    const {products} = useGlobalContext()
    const classes = useStyle();
    const history = useHistory();






    return (
        <>
            <Header/>
            <Container>
                <Grid container direction="row" spacing={3}>
               
                {products.map((product)=>{
                        return <Grid items xm={4} key={product.id}>
                        <Card className={classes.card} raised> 
                                        <CardHeader />
                      
                                        <img
        className={classes.media}
        src={product.image}
        title={product.title}
        alt="product image"
      />
                                        <CardContent alignItems="center">
                                        
                                                <Typography variant="subtitle2">
                                                            {product.title} <br/>
                                                            <h2>&#8377; {product.price}</h2>
                                                </Typography>
                                        </CardContent>

                                        <CardActions>
                                          <Link to={`/products/${product.id}`}>  <Button variant="contained" color="primary"> Buy now </Button> </Link>
                                            <Button variant="outlined" color="secondary"> Add To Cart </Button>
                                        </CardActions>

                                </Card>
                            
                                </Grid>
                            

                })}
                
            </Grid>

            </Container>


        <Footer/>
        </>
    )
}


export default ProductList
