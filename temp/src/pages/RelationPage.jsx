import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RelationPage.css";
import logo from "../components/logo.png";
import Header from "./Header";

const Relation = () => {
  const [activeCategory, setActiveCategory] = useState("Bone");
  const [activeTab, setActiveTab] = useState("Recommended");

  const categories = ["Bone", "Body", "Investor"];
  
  
  const categoryTabs = {
    Bone: ["Recommended", "Connected"],
    Body: ["Recommended", "Save", "In progress", "Applied"],
    Investor: ["Recommended", "Connected"]
  };

  
  useEffect(() => {
    setActiveTab("Recommended");
  }, [activeCategory]);

  
  const relationData = {
    Bone: {
      Recommended: [
        {
          name: "Budi Cahyadi",
          description: "An entrepreneur of Elevate Solutions Company",
          type: "bone"
        },
        {
          name: "Sophia Carter",
          description: "An entrepreneur of Pinnacle Ventures Company",
          type: "bone"
        }
      ],
      Connected: [
        {
          name: "Michael Zhang",
          description: "Tech startup founder",
          type: "bone"
        },
        {
          name: "Emma Williams",
          description: "Digital Marketing Specialist",
          type: "bone"
        }
      ]
    },
    Body: {
      Recommended: [
        {
          name: "Dapoer Nusantara",
          description: "Traditional Cuisine",
          type: "body"
        },
        {
          name: "FreshFarm Mart",
          description: "Agritech (Fresh Produce Delivery Platform)",
          type: "body"
        }
      ],
      Save: [
        {
          name: "Village Spice Co.",
          description: "Packaged Food Products (Chili Paste, Snacks)",
          type: "body"
        }
      ],
      "In progress": [
        {
          name: "Handcraft Creations",
          description: "Handmade Crafts and Souvenirs",
          type: "body"
        }
      ],
      Applied: [
        {
          name: "Local Food Market",
          description: "Traditional Market Digitalization",
          type: "body"
        }
      ]
    },
    Investor: {
      Recommended: [
        {
          name: "Alexander Reid",
          description: "Venture Partner at Summit Ventures",
          type: "investor"
        },
        {
          name: "Olivia Hayes",
          description: "Head of Startup Investments at Aspire Holdings",
          type: "investor"
        }
      ],
      Connected: [
        {
          name: "James Foster",
          description: "CEO and Private Equity Investor",
          type: "investor"
        }
      ]
    }
  };

  
  const getCurrentData = () => {
    return relationData[activeCategory]?.[activeTab] || [];
  };

  return (
    <div className="relation-container">
      {}
      <Header/>

      {}
      <aside className="sidebar">
        <ul className="menu">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/schedule">📅 Schedule</Link></li>
          <li><Link to="/library">📚 Library</Link></li>
          <li className="menu-section">GROW</li>
          <li><Link to="/coaching">🔹 Coaching</Link></li>
          <li><Link to="/relation">🔹 Relation</Link></li>
          <li><Link to="/learning-materials">🔹 Learning materials</Link></li>
          <li className="menu-section">EXPLORE</li>
          <li><Link to="/article">📰 Article</Link></li>
          <li><Link to="/threads">💬 Threads</Link></li>
          <li className="logout"><Link to="/logout">🚪 Log Out</Link></li>
        </ul>
      </aside>

      {}
      <main className="content">
        <h2 className="relation-title">Relation</h2>

        {}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {}
        <div className="filter-tabs">
          {categoryTabs[activeCategory].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {}
        <div className="cards-container">
          {getCurrentData().map((item, index) => (
            <div key={index} className={`relation-card ${item.type}-card`}>
              <div className="card-left">
                <div className="avatar">
                  <span className="avatar-placeholder">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div className="card-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="card-actions">
                {item.type === 'body' && (
                  <button className="action-btn">
                    <span>📩</span>
                  </button>
                )}
                <button className="action-btn">
                  <span>🔍</span>
                </button>
                <button className="action-btn">
                  <span>👥</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Relation;