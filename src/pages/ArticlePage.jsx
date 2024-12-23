import React from "react";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import logo from "../components/logo.png";
import article1 from "../components/article1.png";
import article2 from "../components/article2.png";
import article3 from "../components/article3.png";
import article4 from "../components/article4.png";
import article5 from "../components/article5.png";
import article6 from "../components/article6.png";
import Header from "./Header";

const Articles = () => {
  const articles = [
    {
      title: "Zomato Expands Offerings",
      description:
        'Zomato has launched a new app called "District," which integrates dining, movie ticket bookings, and event management services. This move...',
      image: article1,
    },
    {
      title: "Indian EdTech Growth in Healthcare",
      description:
        "Indian edtech startups are increasingly focusing on upskilling in nursing and allied healthcare to meet rising domestic and...",
      image: article2,
    },
    {
      title: "Zepto's Cash Burn and Funding",
      description:
        "Quick-commerce startup Zepto is experiencing high monthly cash burn rates...",
      image: article3,
    },
    {
      title: "Amazon India Headquarters Relocation",
      description:
        "Amazon India is moving its headquarters in Bengaluru to a more cost-effective location near...",
      image: article4,
    },
    {
      title: "Michael Kors and Coach Deal Collapses",
      description:
        "A proposed $8.5 billion merger between luxury brands Michael Kors and Coach was called off after...",
      image: article5,
    },
    {
      title: "Grubhub Sold at a Steep Loss",
      description:
        "Just Eat Takeaway has offloaded Grubhub for $650 million, far below its acquisition cost...",
      image: article6,
    },
  ];

  return (
    <div className="articles-container">
      {}
      <Header />

      {}
      <aside className="sidebar">
        <ul className="menu">
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
            <Link to="/schedule">📅 Schedule</Link>
          </li>
          <li>
            <Link to="/library">📚 Library</Link>
          </li>
          <li className="menu-section">GROW</li>
          <li>
            <Link to="/coaching">🔹 Coaching</Link>
          </li>
          <li>
            <Link to="/relation">🔹 Relation</Link>
          </li>
          <li>
            <Link to="/learning-materials">🔹 Learning materials</Link>
          </li>
          <li className="menu-section">EXPLORE</li>
          <li>
            <Link to="/article">📰 Article</Link>
          </li>
          <li>
            <Link to="/threads">💬 Threads</Link>
          </li>
          <li className="logout">
            <Link to="/logout">🚪 Log Out</Link>
          </li>
        </ul>
      </aside>

      {}
      <main className="content">
        <h2 className="articles-header">Articles</h2>
        <p className="sub-header">Hottest this week</p>
        <section className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Articles;
