import { FC } from "react";
import Image from "next/image";
import { Post } from "@/interfaces/interfaces";

interface Props {
    post: Post
}

export const PostDetail: FC<Props> = ({ post }) => {
    return (
        <div className="mt-4 flex gap-2">
            <div className="">
                <div className="post-content_social">
                    <div className="flex flex-col">
                        <span className="detail-social-id">Post id</span>
                        <span className="detail-social_total">{post.id}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="detail-social-id">User id</span>
                        <span className="detail-social_total">{post.userId}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-[20px] font-semibold text-primary-text">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
            <Image
                src="/images/postEmpty.svg"
                alt="Logotipo"
                width={180}
                height={60}
            />
        </div>
    )
}
