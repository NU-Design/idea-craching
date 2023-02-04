import ResponsiveAppBar from "../navbar/ResponsiveAppBar";
import RecipeReviewCard from "../../common/components/PostCard";
import './index.css';
//import { style } from "@mui/system";

const Home = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            pt:"10px"
        }}>
            <div className="flexbox-container">
                <div><RecipeReviewCard props={false}/></div>
                <div><RecipeReviewCard props={false}/></div>
                <div><RecipeReviewCard props={false}/></div>
            </div>
        </div>
    </>
  );
};

export default Home;
