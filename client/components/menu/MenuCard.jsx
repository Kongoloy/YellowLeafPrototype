import { useState } from "react"
import StarRating from "./StarRating"
import './MenuCard.scss'
export default function MenuCard({ cardImage, cardDes, cardName, cardReviews }) {


    return (
        <>
            <div className="card-container" >
                <div className="card-img-container">
                    <img className="card-img" src={cardImage} alt={cardName} />
                </div>
                <div className="card-inline-container">
                    <h3>{cardName}</h3>
                    <StarRating rating={cardReviews}></StarRating>
                </div>
                <h4>{cardDes}</h4>
            </div>
        </>
    )
}