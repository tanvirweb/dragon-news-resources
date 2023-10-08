import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideBar = () => {
    return (
        <div>
            <div className="space-y-3 border p-4 mb-4">
                <h2 className="font-extrabold text-2xl">Login With</h2>
                <button className="btn btn-secondary">Login with Google</button>
                <button className="btn btn-secondary">Login with Github</button>
            </div>
            <div className="space-y-3 border p-4 mb-4">
                <h2 className="font-extrabold text-2xl">Find Us On</h2>
                <a href="#" className="btn btn-primary">Facebook</a>
                <a href="#" className="btn btn-secondary">Twitter</a>
            </div>
            <div className="space-y-3 border p-4 mb-4">
                <h2 className="font-extrabold text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;