import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {

    const news= useLoaderData()
    return (
        <div className="mt-5">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border col-span-2">
                  {
                    news.map(aNews=><NewsCard key={aNews._id} news={aNews} ></NewsCard>)
                  }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;