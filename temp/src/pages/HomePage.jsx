import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import article1 from "../components/article1.png";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      
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
        {}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <img
              src={article1}
              alt="Zomato Expands Offerings"
              className="w-1/2 h-96 object-cover"
            />
            <div className="w-1/2 p-6">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Latest News
              </span>
              <h2 className="text-3xl font-bold my-4 text-gray-800">
                Zomato Expands Offerings
              </h2>
              <p className="text-gray-600 mb-6">
                Zomato has launched a new app called "Tickets," which integrates
                dining, movie ticket bookings, and event management services.
              </p>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                Read more
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">📅</span>
              <h3 className="text-2xl font-bold text-gray-800">To-Do List</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Completing 1 Article resource",
                  desc: "Session 1.4 Financial Management",
                  type: "Article"
                },
                {
                  title: "Attend the Virtual Class",
                  desc: "Session 3.1 Legal and Ethical Considerations",
                  type: "Class"
                },
                {
                  title: "Completing 2 Video resources",
                  desc: "Session 3.1 Legal and Ethical Considerations",
                  type: "Video"
                },
                {
                  title: "Completing 1 Link resource",
                  desc: "Session 4.1 Operations and Business Process Management",
                  type: "Link"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {item.type}
                  </span>
                  <h4 className="text-gray-800 font-medium mt-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <button type="button" className="mt-4 text-blue-700 hover:text-blue-800 font-medium text-sm inline-flex items-center">
              View all
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>

          {}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">📈</span>
              <h3 className="text-2xl font-bold text-gray-800">What's Trending?</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  tag: "#MarketTrendsToday",
                  desc: "Latest updates on market opportunities",
                  engagement: "2.5k discussions"
                },
                {
                  tag: "#BusinessGrowthTips",
                  desc: "Proven strategies to scale your business effectively",
                  engagement: "1.8k discussions"
                },
                {
                  tag: "#StartUpStories",
                  desc: "Inspiring journeys of startups making a mark globally",
                  engagement: "3.2k discussions"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h4 className="text-purple-600 font-medium">{item.tag}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <span className="inline-flex items-center mt-2 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.engagement}
                  </span>
                </div>
              ))}
            </div>
            <button type="button" className="mt-4 text-purple-700 hover:text-purple-800 font-medium text-sm inline-flex items-center">
              View all
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;