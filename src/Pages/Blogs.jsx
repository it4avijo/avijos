import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl, timeAgo } from "../Assets/Data";
import CareerNav from "../components/Navbar/CarrerNav";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        try {
            const response = await fetch(`${BaseUrl}/admin/All/blogs`);
            const json = await response.json();
            const getType = await json.data.filter((item) => item.type === "avijo main");
            setBlogs(getType);
            const uniqueCategory = [
                ...new Set(getType?.map((item) => item?.category)),
            ];
            setCategories(uniqueCategory);
        } catch (e) {
            console.log('error fetching blogs', e);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleNavigate = (id) => {
        navigate(`/blog/${id}`)
    }

    return (
        <div className="w-full flex flex-col items-center">
            <CareerNav />
            <div className="bg-transparent w-full">
                <img src={require('../Assets/image/docare1.png')} className="w-full h-[400px]" />
            </div>

            <div className="flex w-full">
                {/* Sidebar */}
                <div className="md:w-[300px] w-[200px] bg-white p-4 border-r h-screen sticky top-0">
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold text-black">Categories</h2>
                        {categories.length === 0 ? (
                            <p>No categories available</p>
                        ) : (
                            categories.map((item, index) => (
                                <div key={index} className={`p-2 ${selected === index && 'bg-gray-200'} rounded-lg`} onClick={() => setSelected(index)}>
                                    <span className="text-lg text-gray-700">{item}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4">
                    <div className="flex flex-wrap w-full items-start">
                        {blogs.map((item, index) => {
                            if (item.category === blogs[index].category) {
                                return (
                                    <div
                                        key={item.id}
                                        className="flex flex-col w-full md:w-1/2 p-4"
                                        onClick={() => handleNavigate(item._id)}
                                    >
                                        <img
                                            src={item.imageUrl}
                                            alt="Blog"
                                            className="h-[250px] w-full object-cover mt-4 border rounded-md transform transition-all duration-300 ease-in-out hover:scale-105"
                                        />
                                        <span className="pt-2 text-xs line-clamp-2">
                                            {item.createdAt && timeAgo(item.createdAt)}
                                        </span>
                                        <h4 className="pt-2 line-clamp-2">{item.title}</h4>
                                        <div
                                            className="line-clamp-2"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        />
                                    </div>
                                );
                            }
                            return null; // Return null if the condition is not met
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

