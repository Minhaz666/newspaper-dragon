import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-mplkzlzdp-minhaz666.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.log(error))
    },[])

    return (
        <div>
            
            <h3>I ama always in Left</h3>
            
            {
                categories.map(categorie=> <p key={categorie.id}><Link className='text-decoration-none text-black' to={`/categorie/${categorie.id}`} >{categorie.name}</Link></p>)
            }
            
        </div>
    );
};

export default LeftNav; 