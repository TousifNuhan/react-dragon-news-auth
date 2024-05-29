import { useParams } from "react-router-dom";
import RightSideNav from "../Home/RightSideNav";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-3">
                <div className="col-span-3">
                     {id}
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;