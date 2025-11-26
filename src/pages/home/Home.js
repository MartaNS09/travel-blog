import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PostCard from "../../components/cards/PostCard";
import Button from "../../components/ui/Button";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const mockPosts = [
        {
          id: 1,
          title: "Один зимний день в Венеции",
          description:
            "Говорят, что Венецию покинуло 70% местных жителей. Говорят, что это из-за сверх туризма. Еще говорят, что Венеци...",
          country: "Италия",
          city: "Венеция",
          image: "Rectangle-1.jpg",
        },
        {
          id: 2,
          title: "Фуншал. Расслабленный и броский",
          description:
            "Обзорно о замках Фуншала, музеях, скульптурах и нарядных улицах центра",
          country: "Португалия",
          city: "Фуншал",
          image: "Rectangle-2.jpg",
        },
        {
          id: 3,
          title: "Два сезона Северной Осетии. ч. 1 — Зима",
          description:
            "Моя первая вылазка в Северную Осетию, январь совсем не популярный месяц тут, но с погодой очень повезло, виды были...",
          country: "Россия",
          city: "Владикавказ",
          image: "Rectangle-3.jpg",
        },
        {
          id: 4,
          title: "Короткое воспоминаниео Монополи",
          description:
            "За окном уже снег, минус четыре и рано темнеет… Скоро рождественские и новогодние праздники. Кажется надо бы...",
          country: "Италия",
          city: "Монополи",
          image: "Rectangle-4.jpg",
        },
        {
          id: 5,
          title: "Санкт-Петербург. Дворец Коттедж",
          description:
            "Дворец Коттедж и парк Александрия располагаются к востоку от центрального петергофского ансамбля на землях...",
          country: "Россия",
          city: "Санкт-Петербург",
          image: "Rectangle-5.jpg",
        },
        {
          id: 6,
          title: "Арабская сказка: успеть за 8 часов ",
          description:
            "Длинная стыковка на пути в Южную Америку: знакомство с Дохой, столицей одного из самых маленьких государств...",
          country: "ОАЭ",
          city: "Дубай",
          image: "Rectangle-6.jpg",
        },
      ];
      setPosts(mockPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Загрузка путешествий...</div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="container">
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {isAuthenticated && (
          <div className="add-post-section">
            <Link to="/create-post">
              <Button variant="primary" size="medium">
                Добавить мое путешествие
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
