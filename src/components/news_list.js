import React from 'react';
import FoodItem from './news_list_item';

const FoodList = (props) => {
    
    const xres = props.makanan.map((isi)=>{
        return(
            <FoodItem panganan={isi} key={isi.id}/>
        )
    }) 

    return (
        <div>
            { xres }
            { props.children }
        </div>
    )
}

export default FoodList;