import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-card__image">
        <img
          src={`/images/${post.image}`}
          alt={post.title}
          onError={(e) => {
            console.error("Ошибка загрузки изображения:", post.image);
            e.target.style.display = "none";
            const placeholder = document.querySelector(
              ".post-card__image-placeholder"
            );
            if (placeholder) {
              placeholder.style.display = "flex";
            }
          }}
        />
        <div className="post-card__image-placeholder">
          <span>{post.city}</span>
        </div>
      </div>
      <div className="post-card__content">
        <div className="post-card__text">
          <h3 className="post-card__title">{post.title}</h3>
          <p className="post-card__description">{post.description}</p>
        </div>
        <div className="post-card__footer">
          <div className="post-card__location">
            {post.country}, {post.city}
          </div>
          <Link to={`/post/${post.id}`} className="post-card__link">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
