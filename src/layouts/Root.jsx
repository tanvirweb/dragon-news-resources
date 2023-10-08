import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;