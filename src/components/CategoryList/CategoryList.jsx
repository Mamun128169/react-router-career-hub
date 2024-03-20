import { useEffect, useState } from "react";
import JobList from "../JobList/JobList";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('../../../public/categories.json');
            const data = await res.json();
            setCategoryList(data);
        }

        fetchData();
    }, []);

    return (
        <div className="text-center mb-8">
            <h2 className="text-5xl font-medium">Job Category List</h2>

            <p className="text-gray-400 text-sm mt-5 mb-8
            ">Explore thousands of job opportunities with all the information you need.Its easy to find your dream job here.</p>
            <div className="flex gap-6 justify-evenly items-center flex-wrap">
                {
                    categoryList.map(list => <JobList 
                        key={list.id}
                        list={list}
                        ></JobList>)
                }
            </div>
        </div>
    );
};

export default CategoryList;