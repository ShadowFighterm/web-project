import style from "./listingimages.module.css"

function ListingImages({ img = ["", "", "", "", ""] }) {
    return (
        <div className={`${style.container}`}>
            <div>
                <img src={img[0]} alt="" />
            </div>
            <div>
                <img src={img[1]} alt="" />
                <img src={img[2]} alt="" />
                <img src={img[3]} alt="" />
                <img src={img[4]} alt="" />
            </div>
        </div>
    );
}

export default ListingImages;