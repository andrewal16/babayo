import React from "react";
import "./QuestionnairePage.css"; 

const QuestionnairePage = () => {
  return (
    <div className="app-container">
      {}
      <div className="navbar">
        <div className="logo">BONE</div>
        <input type="text" className="search-bar" placeholder="Search" />
        <div className="navbar-icons">
          <span>\u2709</span> {}
          <span>\u1F514</span> {}
          <span>\u1F464</span> {}
          <span>\u0024</span> {}
        </div>
      </div>

      {}
      <div className="questionnaire-container">
        <div className="questionnaire-card">
          <h2 className="questionnaire-title">Have you taken our daily questionnaire?</h2>
          <p className="questionnaire-description">
            Get to know yourself better and make a business that suits you!
          </p>
          <div className="questionnaire-buttons">
            <button className="btn btn-yes">Yes, I did.</button>
            <button className="btn btn-no">Nope, let’s go!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
