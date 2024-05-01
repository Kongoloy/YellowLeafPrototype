import Logo from '../hero/Logo'
import './Location.scss'
import Map from './Map'
export default function Location() {
    return (
        <div className="location" id="location">
            <h1 className="location-tag">Location</h1>
            <div className='location-container'>
                <div className='location-info-container'>
                    <a href='https://www.google.com/maps/place/Yellow+Leaf/@13.8716985,100.4714454,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29b3726f6dbb5:0x5c52f5bf597f3bd5!8m2!3d13.8716933!4d100.4740203!16s%2Fg%2F11h7t_z51j?entry=ttu'>COME VISIT US </a>
                    <h2>11/5 Moo 3, Sai Ma, Mueng Nonthaburi, Thailand</h2>
                    <br />
                    <h2>Contact: 096-860-6380</h2>
                    <Logo classType={'location-logo'} color={'#14213D'} />
                </div>
                <Map />
            </div>
        </div>
    )
}