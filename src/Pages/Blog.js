import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl, timeAgo } from "../Assets/Data";
import CareerNav from "../components/Navbar/CarrerNav";

export default function Blog() {

    const { id } = useParams();
    const [blog, setBlog] = useState({});

    const fetchBlog = async () => {
        try {
            const response = await fetch(`${BaseUrl}/admin/blog/getSingleBlog/${id}`);
            const json = await response.json();
            if (response.ok) {
                setBlog(json.data);
            }
            console.log('data:', json);
        } catch (e) {
            console.log('error fetching blog...', e);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <div className="w-full flex flex-col items-center">
            <CareerNav />
            <div className="bg-transparent w-full">
                <img src={blog.imageUrl} className="w-full h-[400px] rounded-md border" />
            </div>
            <span className="pt-2 text-sm line-clamp-2 w-[80%] text-[Gilroy-SemiBold] text-black">{blog.createdAt && timeAgo(blog.createdAt)}</span>
            <h4 className="pt-2 w-[80%]">{blog.title}</h4>
            <div className="w-[80%]" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}