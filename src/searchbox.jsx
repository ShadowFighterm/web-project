import "./searchbox.css";
import "./global.css"

function SearchBox(){
    return (
        <div class="center">
            <div class="search-container">
                <button class="search-box-btn w30">
                    <div>
                        <h1>Where</h1>
                        <h2>Search destinations</h2>
                    </div>
                </button>
                <button class="search-box-btn w20">
                    <div>
                        <h1>Check in</h1>
                        <h2>Add dates</h2>
                    </div>
                </button>
                <button class="search-box-btn w20">
                    <div>
                        <h1>Check out</h1>
                        <h2>Add dates</h2>
                    </div>
                </button>
                <button class="search-box-btn w30">
                    <div class="horizontal-flex">
                        <div>
                            <h1>Who</h1>
                            <h2>Add guests</h2>
                        </div>
                        <div>
                            <button class="search-btn">⌕</button>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default SearchBox;