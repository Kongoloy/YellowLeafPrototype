import StarRating from "./StarRating"
import './MenuCard.scss'
import { motion } from "framer-motion"
import { capFirstLetter, removeJPG, replaceWithSpace } from "../../../utils"
export default function MenuCard({ cardImage, cardDes, cardName, cardReviews }) {

    return (
        <>
            <motion.div initial={{ x: -50, opacity: 0.5 }} animate={{ x: 0, opacity: 1 }} className="card-container" >
                <div className="card-img-container">
                    <img className="card-img" src={cardImage} alt={cardName} />
                </div>
                <div className="card-inline-container">
                    <h3>{replaceWithSpace(removeJPG(capFirstLetter(cardName)))}</h3>
                    <StarRating rating={cardReviews}></StarRating>
                </div>
                <h4>{cardDes}</h4>
            </motion.div>
        </>
    )
}