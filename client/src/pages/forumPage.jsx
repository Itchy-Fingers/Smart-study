import React, { useState } from 'react';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState('');

  const handleAddPost = () => {
    if (question.trim()) {
      setPosts([...posts, { id: Date.now(), text: question, comments: [] }]);
      setQuestion('');
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    ));
  };

 return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Forum Discussions</h2>

      <div className="mb-6">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Start a discussion..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddPost}
        >
          Post
        </button>
      </div>

      {posts.map(post => (
        <div key={post.id} className="bg-white shadow p-4 rounded mb-4 border">
          <p className="font-semibold mb-2">🗨 {post.text}</p>
          
          <div className="ml-4">
            {post.comments.map((cmt, idx) => (
              <p key={idx} className="text-sm text-gray-700 mb-1">💬 {cmt}</p>
            ))}
            <CommentInput onAdd={(cmt) => handleAddComment(post.id, cmt)} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentInput = ({ onAdd }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      onAdd(comment);
      setComment('');
    }
  };
 return (
    <div className="flex mt-2">
      <input
        type="text"
        className="flex-1 border px-2 py-1 rounded mr-2"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="bg-gray-700 text-white px-3 py-1 rounded" onClick={handleSubmit}>
        Reply
      </button>
    </div>
  );
};

export default ForumPage;
