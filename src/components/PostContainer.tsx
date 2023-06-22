import React, {useEffect, useState} from 'react';
import {PostAPI} from "../serivces/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    // refetch
  } = PostAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000
  });
  const [createPost, {
    error: createError,
    isLoading: isCreateLoading
  }] = PostAPI.useCreatePostMutation();
  const [updatePost, {}] = PostAPI.useUpdatePostMutation();
  const [deletePost, {}] = PostAPI.useDeletePostMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000)
  }, []);

  const handleCreate = async () => {
    const title = prompt("Введите название поста") || "";
    await createPost({title, body: title} as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
        <h2>Список постов 1:</h2>
        {/*<button onClick={() => refetch()}>Перезагрузить посты</button>*/}
        <button onClick={handleCreate}>Добавить новый пост</button>
        {isLoading && <h3>Идёт загрузка...</h3>}
        {error && <h3>Произошла ошибка при загурзке постов</h3>}
        {isCreateLoading && <h3>Идёт загрузка...</h3>}
        {createError && <h3>Произошла ошибка при создании поста</h3>}
        {posts && posts.map(post => {
          return (
            <PostItem
              key={post.id}
              post={post}
              remove={handleRemove}
              update={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostContainer;
