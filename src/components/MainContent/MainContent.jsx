import React from 'react';
import QuickActions from './QuickActions';
import WelcomeSection from './WelcomeSection';
import StatusCards from './StatusCards';
import TipsSection from './TipsSection';
import DailyTip from './DailyTip';
import CalendarWidget from './CalendarWidget';
import ProfileCompletion from './ProfileCompletion';
import QuickStats from './QuickStats';

const MainContent = ({ 
  currentTime,
  profileCompletion,
  completedItems,
  toggleProfileItem
}) => {
  return (
    <div className="flex-1 p-4 lg:p-6 overflow-auto">
      {/* Quick Actions - Mobile Only */}
      <QuickActions />

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 min-w-0">
          <WelcomeSection />
          <StatusCards />
          <TipsSection />
          <DailyTip />
        </div>

        {/* Right Column */}
        <div className="w-full xl:w-80 space-y-6">
          <CalendarWidget />
          <ProfileCompletion 
            profileCompletion={profileCompletion}
            completedItems={completedItems}
            toggleProfileItem={toggleProfileItem}
          />
          <QuickStats />
        </div>
      </div>
    </div>
  );
};

export default MainContent; 