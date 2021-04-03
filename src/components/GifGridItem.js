

const GiftGridItem = ({ id, title, img }) => {
    //const GiftGridItem = ( props ) => {

    return (

        <div className="card animate__animated animate__bounce">
            <img src={img} alt={title} />
            <p>{title}</p>
        </div>

    )

}

export default GiftGridItem;