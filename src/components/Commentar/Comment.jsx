import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { id as localeID } from "date-fns/locale";
import "./Comments.css";
import GuestAttendance from "./GuestAttendence";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState({});
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [showReplies, setShowReplies] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("tamu");
    if (urlName) {
      setName(urlName);
    }
  }, []);

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim()) return;

    await addDoc(collection(db, "comments"), {
      name: name,
      text: newComment,
      timestamp: serverTimestamp(),
      likes: 0,
      dislikes: 0,
      replies: [],
    });

    setNewComment("");
  };

  const handleLike = async (commentId, currentLikes) => {
    const commentRef = doc(db, "comments", commentId);

    // Update state secara lokal agar UI langsung berubah
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: currentLikes + 1 }
          : comment
      )
    );

    // Update Firestore
    await updateDoc(commentRef, {
      likes: currentLikes + 1,
    });
  };

  const handleDislike = async (commentId, currentDislikes) => {
    const commentRef = doc(db, "comments", commentId);

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, dislikes: currentDislikes + 1 }
          : comment
      )
    );

    await updateDoc(commentRef, {
      dislikes: currentDislikes + 1,
    });
  };

  const handleReply = async (commentId) => {
    if (!replyText[commentId]?.trim() || !name.trim()) return;

    const commentRef = doc(db, "comments", commentId);
    await updateDoc(commentRef, {
      replies: arrayUnion({
        name: name,
        text: replyText[commentId],
        timestamp: new Date().toISOString(),
      }),
    });

    setReplyText({ ...replyText, [commentId]: "" });
    setShowReplyInput(null);
  };

  return (
    <>
    <GuestAttendance />
    <div className="comments-container">
      <h2 className="comments-title">Komentar</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          placeholder="Tambahkan komentar..."
          className="comment-input"
          required
        />
        <button type="submit" className="comment-submit">Kirim</button>
      </form>

      {/* Wrapper untuk scroll */}
      <div className="comment-box">
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <div className="comment-content">
                <div className="comment-header">
                  <div className="avatar">{comment.name.charAt(0)}</div>
                  <strong className="comment-name">{comment.name}</strong>
                </div>
                <div className="comment-text">{comment.text}</div>
              </div>

              <div className="comment-footer">
                <span className="comment-time">
                  {comment.timestamp
                    ? formatDistanceToNow(comment.timestamp.toDate(), { addSuffix: true, locale: localeID })
                    : "Baru saja"}
                </span>

                <div className="comment-actions">
                  <button onClick={() => handleLike(comment.id, comment.likes)} className="like-btn">
                    👍 {comment.likes || 0}
                  </button>
                  <button onClick={() => handleDislike(comment.id, comment.dislikes)} className="dislike-btn">
                    👎 {comment.dislikes || 0}
                  </button>
                  
                  <button
                    onClick={() => {
                      setShowReplyInput(showReplyInput === comment.id ? null : comment.id);
                      if (showReplies[comment.id] === undefined) {
                        setShowReplies({ ...showReplies, [comment.id]: false }); // Pastikan state awal
                      }
                      setShowReplies({ ...showReplies, [comment.id]: !showReplies[comment.id] })
                    }}
                    className="reply-btn toggle-reply-btn"
                  >
                    💬 {(showReplyInput === comment.id && showReplies[comment.id]) ? "Tutup" : (comment.replies.length > 0 ? `${comment.replies.length} Balasan` : "Balas" )}
                  </button>
                </div>
              </div>

              {showReplyInput === comment.id && (
                <div className="reply-form">
                  <input
                    type="text"
                    value={replyText[comment.id] || ""}
                    onChange={(e) =>
                      setReplyText({ ...replyText, [comment.id]: e.target.value })
                    }
                    onKeyDown={(e) => e.key === "Enter" && handleReply(comment.id)}
                    placeholder="Tulis balasan..."
                    className="reply-input"
                  />
                  <button onClick={() => handleReply(comment.id)} className="reply-submit">
                    Kirim
                  </button>
                </div>
              )}

              {showReplies[comment.id] && comment.replies?.length > 0 && (
                <ul className="reply-list">
                  {comment.replies.map((reply, index) => (
                    <li key={index} className="reply">
                      <div className="reply-header">
                        <div className="avatar">{reply.name.charAt(0)}</div>
                        <strong className="reply-name">{reply.name}</strong>
                      </div>
                      <div className="reply-text">{reply.text}</div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Comments;
