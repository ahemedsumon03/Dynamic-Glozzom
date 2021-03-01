import {useRouter} from 'next/router';
import React from 'react';
import MyBlogDetails from '../../../pages/blog/[blogdetails]/index'


export default function Value() {
    const router = useRouter();
    return(
        <div>
           <MyBlogDetails id={router.query.value}></MyBlogDetails> 
        </div>
    )
}

