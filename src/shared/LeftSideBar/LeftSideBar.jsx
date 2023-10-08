import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="space-y-3 border p-4 mb-4">
                <h2 className="font-extrabold text-2xl">Q Zone</h2>
                <ul className="space-y-2">
                    {
                        categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideBar;