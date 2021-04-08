import PropTypes from 'prop-types';

const GiftGridItem = ({ id, title, img }) => {
    //const GiftGridItem = ( props ) => {

    return (

        <div className="card animate__animated animate__bounce">
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>

    )

}

GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default GiftGridItem;