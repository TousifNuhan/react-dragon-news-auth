import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border col-span-2">
                    <p>coming soon</p>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;