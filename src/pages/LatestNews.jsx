import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-primary">Latest</button>
            <Marquee pauseOnHover={true}>
                <p>Match Highlights: Germany vs Spain — as it happened</p>
                <p>Match Highlights: Germany vs Spain — as it happened</p>
                <p>Match Highlights: Germany vs Spain — as it happened</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;