import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content.js";
import Articles from "../components/Article.js"

const ArticleDetail = () =>{
    const params = useParams();
    const article = articles.find((article) => article.name === params.name);
    if(!article) return <h1>Article does not exist</h1>
    const otherArticles = articles.filter((article) => article.name !== params.name);
    return(
        <>
        <div>
            <h1 className="font-bold mb-4">{article.title}</h1>
            <p>{article.content}</p>
            <h1 className="font-bold mt-4 mb-4 text-grey-700">
                Other Articles:
            </h1>
            <div className="flex flex-wrap m-4">
                <Articles articles={otherArticles}/>
            </div>
        </div>
        </>
    );
};
export default ArticleDetail;