import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ThreadsPage.css";
import logo from "../components/logo.png"; 
import Header from "./Header";

const Threads = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  const threadsData = [
    {
      user: "User#9123",
      text: "Market trends are shifting rapidly! Stay ahead with insights on #MarketTrendsToday. Explore strategies to grow your business in the ever-evolving market environment.",
      likes: "1.2k",
      comments: "15",
      shares: "14.2k",
    },
    {
      user: "User#3123",
      text: "Proven strategies to scale your business effectively. Check out #BusinessGrowthTips for actionable advice!",
      likes: "856",
      comments: "15",
      shares: "9,324",
    },
    {
      user: "User#7840",
      text: "Get inspired by the incredible journeys of startups making waves globally with #StartUpStories.",
      likes: "642",
      comments: "15",
      shares: "7,856",
    },
    {
      user: "User#0834",
      text: "Innovative technologies are transforming businesses every day. Discover the latest trends with #TechForBusiness.",
      likes: "324",
      comments: "15",
      shares: "6,432",
    },
  ];

  return (
    <div className="threads-container">
      {}
      <Header/>

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
        <h2 className="threads-title">Threads</h2>

        {}
        <div className="tabs">
          <button
            className={activeTab === "Trending" ? "active" : ""}
            onClick={() => setActiveTab("Trending")}
          >
            Trending
          </button>
          <button
            className={activeTab === "Following" ? "active" : ""}
            onClick={() => setActiveTab("Following")}
          >
            Following
          </button>
          <button
            className={activeTab === "My threads" ? "active" : ""}
            onClick={() => setActiveTab("My threads")}
          >
            My threads
          </button>
        </div>

        {}
        <section className="threads-list">
          {threadsData.map((thread, index) => (
            <div key={index} className="thread-card">
              <div className="user-icon">👤</div>
              <div className="thread-content">
                <h3>{thread.user}</h3>
                <p>{thread.text}</p>
                <div className="thread-stats">
                  <span>❤️ {thread.likes}</span>
                  <span>💬 {thread.comments}</span>
                  <span>🔄 {thread.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Threads;
