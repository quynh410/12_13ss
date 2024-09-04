import React from "react";
async function getPosts(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
}

export default async function Page({ params }: { params: { id: string } },props:any) {
  // const {params}= props;
  const postId = parseInt(params.id); 
  const post = await getPosts(postId); 

  return (
    <div>
      <p>Bài 2</p>
      <p>Chi tiết bài viết</p>
      <b>{post.title}</b>
      <p>{post.body}</p>
    </div>
  );
}
