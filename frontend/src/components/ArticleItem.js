import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";
import ArticleSummary from "./ArticleSummary"
//Copy of as Article Card, used for testing edits of articlecard



const ArticleItem = (props) => {



    const {id,title, authors, source, pubyear, doi,claim,evidence} =
        {
            id: props.object._id,
            title: props.object.title,
            authors: props.object.authors,
            source: props.object.source,
            doi: props.object.doi,
            pubyear: props.object.pubyear,
            claim: props.object.claim,
            evidence: props.object.evidence

        };

    return (
        <>

            <div className="card card-container"  >
                <div className="card-body">
                <h4 className="card-id">ID: {id}</h4>
                <Link className="summary-link" to={"/summary/" + id}>Title: {title}</Link>
                <h5 className="card-text">Authors: {authors}</h5>
                </div>
      
            </div>
    


        </>
    );
}
export default ArticleItem;
