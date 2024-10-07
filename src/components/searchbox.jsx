import searchbox from "../components/searchbox.module.css";
import global from "../components/global.module.css"

function SearchBox() {
    return (
        <div class={global.verticalFlex}>
            <div class={global.center}>
                <div class={searchbox.searchContainer}>
                    <button class={`${searchbox.searchBoxBtn} ${searchbox.w30}`}>
                        <div>
                            <h1>Where</h1>
                            <h2>Search destinations</h2>
                        </div>
                    </button>
                    <button class={`${searchbox.searchBoxBtn} ${searchbox.w20}`}>
                        <div>
                            <h1>Check in</h1>
                            <h2>Add dates</h2>
                        </div>
                    </button>
                    <button class={`${searchbox.searchBoxBtn} ${searchbox.w20}`}>
                        <div>
                            <h1>Check out</h1>
                            <h2>Add dates</h2>
                        </div>
                    </button>
                    <button class={`${searchbox.searchBoxBtn} ${searchbox.w30}`}>
                        <div class={global.horizontalFlex}>
                            <div>
                                <h1>Who</h1>
                                <h2>Add guests</h2>
                            </div>
                            <div>
                                <button class={searchbox.searchBtn}>⌕</button>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class={global.borderDown}></div>
        </div>
    );
}

export default SearchBox;