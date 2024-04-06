import { useState } from "react"
import MenuCard from "./MenuCard"
import "./Menu.css"
export default function Menu() {
    const [cards, SetCards] = useState([{
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }, {
        cardImage: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cardReviews: 2,
        cardName: "coffee",
        cardDes: "lorem",
    }])

    return (
        <div className="menu-container">
            {cards.map((card, index) => {
                return <MenuCard key={index} cardImage={card.cardImage} cardReviews={card.cardReviews} cardDes={card.cardDes} cardName={card.cardName} />
            })}
        </div>
    )
}