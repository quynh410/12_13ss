"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      <h1 className="font-bold text-[30px]">Phân trang với CSR</h1>
      {currentPosts.map((item: any) => (
        <div key={item.id}>
          <b>{item.title}</b>
          <p>{item.body.substring(0, 100)}...</p>
        </div>
      ))}
      <div className=" flex gap-[20px]">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="border border-black w-[100px] h-[30px] rounded" >
          Quay lại
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}  className="border border-black w-[100px] h-[30px] rounded">
          Tiếp
        </button>
        <span>
          Trang {currentPage} / {totalPages}
        </span>
      </div>
    </div>
  );
}
