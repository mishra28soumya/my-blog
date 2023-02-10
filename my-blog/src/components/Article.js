import React from "react";
import {Link } from 'react-router-dom';


const Articles = ({articles}) => {
    return (
        <>
            {articles.map((article)=>(
                <div className="p-4 md:w-1/2">
                    <div className="h-full border-2 border-gray-200 rounded-lg">
                        <Link to={`/articledetail/${article.name}`}>
                            <img className="object-cover object-center" alt="blog1" src={article.thumbnail}/>
                        </Link>
                    </div>
                    <div className="p-6">
                        <Link to={`/articledetail/${article.name}`}>
                            <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                                {article.title}
                            </h3>
                        </Link>
                        <p className="leading-relaxed mb-3">
                            {article.content[0].substring(0,100)}...
                        </p>
                        <div className="flex items-center flex-wrap">
                            <Link className="text-indigo-500 inline-flex items-center" to={`/articledetail/${article.name}`}>
                                Learn more
                            </Link>
                            <div className="justify-end flex-1 text-right">
                                {article.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

}

export default Articles;