import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/interfaces/interfaces";

interface Props {
  post: Post[];
  handleDelete: (id: number) => void
}

export const TablePost: FC<Props> = ({ post, handleDelete }) => {

  return (
    <div className="post-table-container">
      <table className="post-table">
        <thead>
          <tr>
            <th>Post</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post) => (
            <tr key={post.id}>
              <td className="post-table_content-avatar">
                <Image
                  src="/images/postsLogo1.png"
                  alt="Logotipo"
                  width={180}
                  height={60}
                  className="post-avatar post-list_img"
                />
                <div className="post-table-avatar_info">
                  <span>{post.id}</span>
                </div>
              </td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td> <Link href={`/post/edit/${post.id}`}><i className="fa-solid fa-pen"></i></Link></td>
              <td onClick={() => handleDelete(post.id)}> <Link href="/post/listado" ><i className="fa-solid fa-trash"></i></Link></td>
              <td> <Link href={`/post/${post.id}`}><i className="fa-solid fa-arrow-right"></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
