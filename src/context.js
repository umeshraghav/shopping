import { useContext, createContext, useState, useEffect } from "react";



const url =`https://fakestoreapi.com/products`; 

const AppContext = createContext();


    const AppProvider = ({children})=>{
            const [loading, setLoading] = useState(false);
            const [products, setProducts] = useState([]);
           const [productDetail, setProductDetail]= useState()


        const getProductDetails=async(id)=>{
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json();
                setProductDetail(data)
            setLoading(false)
        }


const fetchProducts=async()=>{
        setLoading(true);
          const response = await fetch(url)
        const data = await response.json();
        setProducts(data);
        setLoading(false);

}


 


useEffect(()=>{
    fetchProducts();
},[])




    return (<AppContext.Provider value={{products, loading,getProductDetails,productDetail,setLoading}}>
                {children}
    
    </AppContext.Provider>)

}

export const useGlobalContext = ()=>{
        return useContext(AppContext)
};

export {AppContext, AppProvider}