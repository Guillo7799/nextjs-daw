import React from 'react';

const ArticleDetails = ({article}) =>{
    return (
        <div>
            {article.title}
        </div>
    );
};

export default ArticleDetails;

export async function getStaticProps(context){

    console.log('context',context);
    const{articleId}=context.params;
    const res=await fetch('http://localhost:8000/articles/${articleId}')
    const data = await res.json()

    console.log('data',data);

    if(!data){
        return {
            notFound:true
        }
    }
    return {
        props:{
            article:data
        },
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {articleId:'1'}},
            {params: {articleId:'2'}},
            {params: {articleId:'3'}}
        ],
        fallback: false //que nos presente un notfound
    };
}