import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../customHook/useTitle';

const Categories = () => {
    useTitle('categories')
    const {id}=useParams();
    const CategoryNews=useLoaderData();
    return (
        <div>
            { id && <h2>This is category {CategoryNews.length} </h2>}
            {
                CategoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Categories;