import React from 'react';
import {useRouter} from 'next/router';
import MyBlogDetails from '../../pages/blog/[blogdetails]/index'

export default function Title()
{
    const router = useRouter();
    return(
        <div>
             <MyBlogDetails title={router.query.title}></MyBlogDetails>
        </div>
    )
}