import './Location.scss'
import Map from './Map'
export default function Location() {
    return (
        <div id="location">
            <h1 className="location-tag">Location</h1>
            <Map />
            <img src="https://firebasestorage.googleapis.com/v0/b/yellowleaf.appspot.com/o/Americano.jpg?alt=media&token=090919ab-3103-4de7-9176-78d77160a468" alt="" />
        </div>
    )
}