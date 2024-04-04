import GradeIcon from '@mui/icons-material/Grade';
import './StarRating.css'
export default function StarRating({ rating }) {

    return (
        <div className='rating-container'>
            <h3>{rating}</h3>
            <GradeIcon />
        </div>
    )
}