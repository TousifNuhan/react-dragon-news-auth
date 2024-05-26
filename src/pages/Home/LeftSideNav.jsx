import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <p className="text-xl font-semibold">All Categories</p>
            {
                categories.map(category=><Link className="block mt-4 ml-3" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;