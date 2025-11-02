import React, { useState } from "react";
import "./Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Aarav Sharma",
      title: "How to prepare for coding interviews?",
      content:
        "I’m in 2nd year and want to start preparing for placements. Any tips for a beginner?",
      time: "2h ago",
      replies: [
        { id: 1, user: "Neha Patel", content: "Try LeetCode & CS50 to start!" },
      ],
    },
    {
      id: 2,
      user: "Riya Singh",
      title: "Best tools for project collaboration?",
      content:
        "What tools do you all use for team projects — GitHub, Notion, or something else?",
      time: "5h ago",
      replies: [],
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [replyContent, setReplyContent] = useState({});

  const handlePostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const newEntry = {
      id: posts.length + 1,
      user: "You",
      title: newPost.title,
      content: newPost.content,
      time: "Just now",
      replies: [],
    };

    setPosts([newEntry, ...posts]);
    setNewPost({ title: "", content: "" });
  };

  const handleReplyChange = (postId, value) => {
    setReplyContent({ ...replyContent, [postId]: value });
  };

  const handleAddReply = (postId) => {
    if (!replyContent[postId]?.trim()) return;

    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            replies: [
              ...post.replies,
              { id: Date.now(), user: "You", content: replyContent[postId] },
            ],
          }
        : post
    );

    setPosts(updatedPosts);
    setReplyContent({ ...replyContent, [postId]: "" });
  };

  return (
    <div className="forum-wrapper">
      <div className="forum-header">
        <h1>Campus Connect Forum 💬</h1>
        <p>
          Start discussions, ask questions, and collaborate with your peers!
        </p>
      </div>

      <form className="post-form" onSubmit={handleAddPost}>
        <input
          type="text"
          name="title"
          placeholder="Enter your topic title..."
          value={newPost.title}
          onChange={handlePostChange}
        />
        <textarea
          name="content"
          placeholder="Write your post..."
          value={newPost.content}
          onChange={handlePostChange}
        ></textarea>
        <button type="submit">Post</button>
      </form>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-footer">
              <span>👤 {post.user}</span>
              <span>🕒 {post.time}</span>
            </div>

            <div className="reply-section">
              <h4>Replies ({post.replies.length})</h4>
              <div className="replies">
                {post.replies.map((reply) => (
                  <div key={reply.id} className="reply-card">
                    <strong>{reply.user}</strong>: {reply.content}
                  </div>
                ))}
              </div>

              <div className="reply-input">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={replyContent[post.id] || ""}
                  onChange={(e) => handleReplyChange(post.id, e.target.value)}
                />
                <button onClick={() => handleAddReply(post.id)}>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
