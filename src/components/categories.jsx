import global from "../components/global.module.css";
import categories from "../components/categories.module.css";
import { useState, useRef, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const categoriesData = [
    {
        title: "Icons",
        img: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
    },
    {
        title: "Top cities",
        img: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
    {
        title: "Rooms",
        img: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
        title: "Amazing views",
        img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
        title: "Camping",
        img: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    },
    {
        title: "Design",
        img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    },
    {
        title: "Trending",
        img: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
        title: "Amazing pools",
        img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
        title: "Surfing",
        img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    },
    {
        title: "Arctic",
        img: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    },
    {
        title: "OMG!",
        img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
        title: "Countryside",
        img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
        title: "Mansions",
        img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    },
    {
        title: "Chef's kitchens",
        img: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    },
    {
        title: "New",
        img: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
        title: "Lake",
        img: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    },
    {
        title: "Bed & breakfasts",
        img: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    },
    {
        title: "Beachfront",
        img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
        title: "Beach",
        img: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
        title: "Tropical",
        img: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
        title: "Top of the world",
        img: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    },
    {
        title: "Farms",
        img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
        title: "Castles",
        img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    },
];

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleClick = (index) => setActiveIndex(index);
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    };

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener("scroll", checkScrollPosition);
            checkScrollPosition();
        }
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener("scroll", checkScrollPosition);
            }
        };
    }, []);

    return (
        <div className={global.center}>
            <div className={categories.wrapper}>
                <div className={categories.scrollButtonsWrapper}>
                    <button
                        onClick={scrollLeft}
                        className={`${categories.scrollButton} ${!canScrollLeft ? categories.hidden : ""}`}
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`${categories.scrollButton} ${!canScrollRight ? categories.hidden : ""}`}
                    >
                        <FaAngleRight />
                    </button>
                </div>
                <div ref={scrollRef} className={categories.categoriesContainer}>
                    {categoriesData.map((category, index) => (
                        <button
                            onClick={() => handleClick(index)}
                            key={index}
                            className={`${categories.category} ${activeIndex === index ? categories.activeCategory : ""}`}
                        >
                            <img src={category.img} alt={category.title} />
                            <p>{category.title}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );


}

export default Categories;
