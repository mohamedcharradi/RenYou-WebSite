import React from "react";
import "./FeaturesSection.css";

import AiIcon from "../../../assets/icons/AiAssistant.svg";
import SkinProfileIcon from "../../../assets/icons/happyemoji.svg";
import ExpertsIcon from "../../../assets/icons/medal-star.svg";
import SkinTrackingIcon from "../../../assets/icons/tab-tablet.svg";
import BookingIcon from "../../../assets/icons/calendar-8.svg";
import CommunityIcon from "../../../assets/icons/icon.svg";
import RecommendationsIcon from "../../../assets/icons/notification-on.svg";
import QAIcon from "../../../assets/icons/message-question.svg";

export default function FeaturesSection() {
  const features = [
    {
      icon: AiIcon,
      title: "AI Assistant",
      subtitle: "Smart Guidance, Anytime",
      description: "Get personalized recommendations and analysis from our intelligent AI assistant, designed to help you make better skincare choices."
    },
    {
      icon: SkinTrackingIcon,
      title: "Skin Tracking",
      subtitle: "Monitor Your Skin's Journey",
      description: "Log changes, track improvements, and stay on top of your skin health over time with easy-to-use tracking tools."
    },
    {
      icon: RecommendationsIcon,
      title: "Tailored Recommendations",
      subtitle: "Routines & Advice That Fit You",
      description: "Discover AI-curated product and routine suggestions based on your unique skin profile, concerns, and goals."
    },
    {
      icon: SkinProfileIcon,
      title: "Skin Profile",
      subtitle: "Your Tailored Skin Analysis",
      description: "Complete a quick skin quiz and get an AI-powered analysis of your skin. Track your history, progress, and recommendations, all in one place."
    },
    {
      icon: BookingIcon,
      title: "Booking System",
      subtitle: "Plan and Manage with Ease",
      description: "Easily schedule and manage your appointments with professionals directly through the app."
    },
    {
      icon: ExpertsIcon,
      title: "Experts",
      subtitle: "Trusted Skin Professionals",
      description: "Discover and connect with certified dermatologists and skincare specialists who can guide and support your skin journey, whenever you need them."
    },
    {
      icon: CommunityIcon,
      title: "Community",
      subtitle: "Learn & Share with Others",
      description: "Join a supportive community of people on the same journey. Share experiences, tips."
    },
    {
      icon: QAIcon,
      title: "Q&A Section",
      subtitle: "Get Your Questions Answered",
      description: "Ask anything about skincare and receive reliable responses from our trusted professionals."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Everything You Need for Healthy Skin</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-header">
                <div className="feature-icon-container">
                  <img src={feature.icon} alt={feature.title} className="feature-icon" />
                </div>
                <div className="feature-titles">
                  <h3 className="feature-title">{feature.title}</h3>
                  <h4 className="feature-subtitle">{feature.subtitle}</h4>
                </div>
              </div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}