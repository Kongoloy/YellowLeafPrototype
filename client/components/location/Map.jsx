import './Map.scss'
import { Mapimages } from '../images';
import { motion } from 'framer-motion';
export default function Map() {

    return (
        <div className='map-container'>
            {Mapimages.map((i, idx) => (
                <motion.div key={idx} style={{ backgroundImage: `url(${i.url})` }} className='map-img-container' />
            ))}
        </div>
    );
}
