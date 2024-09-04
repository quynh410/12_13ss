import React from "react";

async function getSt() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url");
    const data = await res.json();
    return data;
  }catch(err:any){
    console.log("lỗi",err);
    return " Đường dẫn sai "
  } 
}

export default async function Page() {
  const st = await getSt();

  return (
    <div>
      <p>Xử lí lỗi với SSR : {st}</p>
      
    </div>
  );
}
