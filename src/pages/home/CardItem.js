import ResponsiveAppBar from "../navbar/ResponsiveAppBar";
import RecipeReviewCard from "../../common/components/PostCard";
import './index.css';
import { getAllIdeas } from "../../common/services/db/ideas";
import { useEffect, useState} from "react";


const Home = () => {

    const [cards, setCards] = useState();
    useEffect(async () => {
        const cards = await getAllIdeas();
        setCards(cards);
        console.log("get data", cards);
    }, []);

  return (
    <>
        <ResponsiveAppBar/>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            pt:"10px"
        }}>
            <div className="flexbox-container">
                {/* {card.forEach(x => <RecipeReviewCard props={x.media.type === "image"}/>)} */}
                cards[0];
            </div>
        </div>
    </>
  );
};

export default Home;
