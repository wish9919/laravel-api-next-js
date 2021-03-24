import React from "react";
import axios from "axios";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";
import { NextServer } from "next/dist/server/next";
import Link from "next/link";
import Admin from "../../layouts/Admin";
import { IPost } from "../../types/post";

interface BlogProps {
  posts: IPost[];
}

const Blog: NextPage<BlogProps> = (props) => {
  console.log(props);

  return (
    <Admin>
      <div className=" px-4 py-4">
        <div className="px-5 bg-white py-4 shadow-md rounded-md flex justify-between items-center">
          <h1 className="font-sans  text-xl text-gray-700">Blog</h1>
          <button className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75">
            Add Post
          </button>
        </div>

        <div className="container py-8 px-5">
          <div className="grid grid-cols-3 gap-5">
            {/* {posts &&
              posts.map((item, index) => {
                return (
                  <Link key={index} href={`blog/${item.id}`}>
                    <div className="py-4 px-4 bg-blue-50 hover:bg-blue-100 shadow-sm transition ease-in cursor-pointer rounded-md">
                      {item.title}
                    </div>
                  </Link>
                );
              })} */}
          </div>
        </div>
      </div>
    </Admin>
  );
};

// Blog.getInitialProps = async () => {
//   let posts = await axios
//     .get("http://localhost:8000/api/posts")
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return {
//     posts,
//   };
// };

export default Blog;
