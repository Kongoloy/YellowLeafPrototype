import './BlackDropFilter.scss'

export default function BlackDropFilter({ width, height, position }) {
    return (
        <>
            <div className="hero-blackdrop-filter" style={{ width: width, height: height, position: position }} />
        </>
    )
}
//accept strings value