import Header from "../shared/Header/Header";
import LeftSideBar from "../shared/LeftSideBar/LeftSideBar";
import Navbar from "../shared/Navbar/Navbar";
import RightSideBar from "../shared/RightSideBar/RightSideBar";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="lg:col-span-2">Home Content</div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </>
    );
};

export default Home;