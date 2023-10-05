import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import NavBar from "../NavBar/NavBar";
import RightSideNav from "../RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
    const news = useLoaderData()
    console.log(news)
 
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <h2 className="text-3xl poppins">This is Home Components</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 ">
                    {
                       news.map(aNews=> <NewsCart 
                        key={aNews._id} 
                        news ={aNews}
                       ></NewsCart>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;