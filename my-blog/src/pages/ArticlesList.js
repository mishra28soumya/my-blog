import React from "react";
import articles from "./article-content";
import Articles from "../components/Article.js";

const ArticlesList = () =>{

    return(
        <>
            <h1 className="font-bold text-2xl mt=6 text-gray-800">Articles List</h1>
            <div>
                <Articles articles={articles}/>
            </div>
        </>
    );
};

export default ArticlesList;
