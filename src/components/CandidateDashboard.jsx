import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

export default function CandidateDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(75);
  const [completedItems, setCompletedItems] = useState({
    personalInfo: true,
    cv: true,
    education: true,
    skills: true,
    photo: false
  });
  const [notifications] = useState([
    { id: 1, message: "Nouvelle opportunité disponible", time: "Il y a 2h", unread: true },
    { id: 2, message: "Profil consulté par RH", time: "Il y a 1 jour", unread: true },
    { id: 3, message: "Document approuvé", time: "Il y a 3 jours", unread: false }
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleProfileItem = (item) => {
    const newCompletedItems = { ...completedItems, [item]: !completedItems[item] };
    setCompletedItems(newCompletedItems);
    
    const completedCount = Object.values(newCompletedItems).filter(Boolean).length;
    setProfileCompletion((completedCount / 5) * 100);
  };

  const formatTime = (date) => {
    return date.toLocaleString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadNotificationsCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          setSidebarOpen={setSidebarOpen} 
          currentTime={currentTime} 
          formatTime={formatTime}
          notifications={notifications}
          unreadNotificationsCount={unreadNotificationsCount}
        />

        <MainContent 
          currentTime={currentTime}
          profileCompletion={profileCompletion}
          completedItems={completedItems}
          toggleProfileItem={toggleProfileItem}
        />
      </div>
    </div>
  );
}