import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IPostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<IPostItemProps> = ({post, remove, update}) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt("Введите название поста") || "";
    update({...post, title});
  };

  return (
    <div
      onClick={handleUpdate}
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        padding: 10,
        margin: 10
    }}
    >
      {post.id}. {post.title}
      <button onClick={handleRemove}>Удалить пост</button>
    </div>
  );
};

export default PostItem;
