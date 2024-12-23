import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/logo.png";
import {
  MessageSquare,
  Bell,
  User,
  DollarSign,
  Home,
  Calendar,
  Book,
  LogOut,
} from "lucide-react";
import "./CoachingPage.css";
import Header from "./Header";

// Sample Data
const myCoachesData = [
  {
    id: 1,
    name: "Zhafar Wuning",
    title: "IT Business Consultant at Lensa Software",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Emily Carter",
    title: "Startup Mentor at SeedWorks",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    title: "Marketing Strategist at BrandSpark",
    image: "https://via.placeholder.com/100",
  },
];

const allCoachesData = [
  ...myCoachesData,
  {
    id: 4,
    name: "Sophia Lee",
    title: "Finance Coach at WealthWise",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Chris Johnson",
    title: "Leadership Trainer at GrowthHub",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Olivia Brown",
    title: "Data Analyst Mentor at InsightLearn",
    image: "https://via.placeholder.com/100",
  },
];

const Coaching = () => {
  const [activeTab, setActiveTab] = useState("My Coach");
  const navigate = useNavigate();

  const handleViewCoach = (coachId) => {
    navigate(`/coach/${coachId}`);
  };

  const coachesToShow =
    activeTab === "My Coach" ? myCoachesData : allCoachesData;

  return (
    <div>
      {}
      <Header />

      {}
      <div className="coaching-container">
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
        <div className="content">
          <h2 className="text-2xl font-bold mb-4">Coaching</h2>
          
          {}
          <div className="tabs">
            <button
              className={activeTab === "My Coach" ? "active" : ""}
              onClick={() => setActiveTab("My Coach")}
            >
              My Coach
            </button>
            <button
              className={activeTab === "All" ? "active" : ""}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
          </div>

          {}
          <div className="coaches-list">
            {coachesToShow.map((coach) => (
              <div key={coach.id} className="coach-card">
                <div className="coach-image">
                  <img src={coach.image} alt={coach.name} />
                </div>
                <div className="coach-details">
                  <h3>{coach.name}</h3>
                  <p>{coach.title}</p>
                  <button
                    className="view-button"
                    onClick={() => handleViewCoach(coach.id)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;