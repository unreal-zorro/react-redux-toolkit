import React from 'react';
import {PostAPI} from "../serivces/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const {
    data: posts,
    error,
    isLoading
  } = PostAPI.useFetchAllPostsQuery(100);

  return (
    <div>
      <div>
        <h2>Список постов 2:</h2>
        {isLoading && <h3>Идёт загрузка...</h3>}
        {error && <h3>Произошла ошибка при загурзке постов</h3>}
        {posts && posts.map(post => {
          return (
            <PostItem
              key={post.id}
              post={post}
              update={() => {}}
              remove={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostContainer2;
