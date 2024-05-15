import { useEffect, useState } from "react";
import axios from 'axios';
import MenuCard from "./MenuCard";
import "./Menu.scss";
import { motion } from "framer-motion";
import { capFirstLetter, getDrinksCategory } from "../../utils";

export default function Menu() {
    const [drinkCategory, setDrinkCategory] = useState([])
    const [cards, setCards] = useState([]);
    const [drinkTypeMenu, setDrinkTypeMenu] = useState('coffee');

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const res = await axios.get(`/api/drinks/all`);
                const { data } = res.data;
                setCards(data)
                setDrinkCategory(await getDrinksCategory())
            } catch (error) {
                console.error('Error fetching data cards:', error);
            }
        };
        fetchDrinks();
    }, []);
    return (
        <div className="menu" id="menu">
            <div className="menu-nav-container">
                <h1 className="menu-tag" >Menu</h1>
                <div className="menu-sidebar-container">
                    <h2 className="menu-info">- Select from our bestsellers -</h2>
                    <div className="menu-cards-type-container">
                        {drinkCategory.map((c, idx) => {
                            return <motion.button transition={{ duration: .5 }} whileHover={{ fontStyle: 'italic', fontWeight: 'bold' }} className='menu-cards-type' onClick={() => setDrinkTypeMenu(c)} key={idx}>{capFirstLetter(c)}</motion.button>
                        })}
                    </div>
                </div>
            </div>
            <div className="menu-container" >
                <div className="menu-cards-wrapper">
                    <motion.div className="menu-cards-container">
                        {cards.map((card, idx) =>
                            card.category === drinkTypeMenu ?
                                <MenuCard key={idx} cardImage={card.image} cardReviews={card.rating} cardDes={card.description} cardName={card.name} /> : null
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

