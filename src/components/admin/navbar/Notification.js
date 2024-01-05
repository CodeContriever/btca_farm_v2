import { useState, useEffect } from 'react';

function Notification() {
    
  const [notifications, setNotifications] = useState([]);
    const [showAllNotifications, setShowAllNotifications] = useState(false);
    
    const handleNotificationButtonClick = () => {
    // Handle notification button click (e.g., toggle the dropdown)
    setShowAllNotifications(!showAllNotifications);
  };

  // Sample JSONPlaceholder API endpoint for posts
  const NOTIFICATIONS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(NOTIFICATIONS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const toggleShowAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  const displayedNotifications = showAllNotifications ? notifications : notifications.slice(0, 5);

  const NotificationButton = ({ isActive = true, onClick, notificationCount }) => (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex relative items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-gray-400 rounded-lg ${isActive ? 'bg-gray-800 text-gray-400' : 'text-gray-500'}`}
    >
      <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
      </svg>

      {isActive && notificationCount > 0 && (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {notificationCount}
        </div>
      )}
    </button>
  );

  const NotificationItem = ({ avatarUrl, sender, message, timeAgo }) => (
    <a href="/1" className="flex py-3 px-4 border-b hover-bg-gray-100 dark-hover-bg-gray-600 dark-border-gray-600">
      <div className="flex-shrink-0">
        <img className="w-11 h-11 rounded-full" src={avatarUrl} alt="Avatar" />
        <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark-border-gray-700">
          <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.293 12.293a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-1-1z" />
          </svg>
        </div>
      </div>
      <div className="pl-3 w-full">
        <div className="text-gray-500 font-normal text-sm mb-1.5 dark-text-gray-400">
          New message from <span className="font-semibold text-gray-900 dark-text-white">{sender}</span>: "{message}"
        </div>
        <div className="text-xs font-medium text-primary-600 dark-text-primary-500">
          {timeAgo}
        </div>
      </div>
    </a>
  );

    return (
      <div className="relative flex flex-col justify-center items-center gap-4" tabIndex="0">
            <NotificationButton
        isActive={showAllNotifications}
        onClick={handleNotificationButtonClick}
        notificationCount={notifications.length}
      />
      {showAllNotifications && (
                  <div className="w-64 lg:w-90 absolute top-12 right-8 z-10 overflow-hidden my-4 text-base list-none bg-gray-400 divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark-bg-gray-700 rounded-xl" id="notification-dropdown" tabIndex="-1">
      <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark-bg-gray-600 dark:text-gray-300">
        Notifications
      </div>
      {displayedNotifications.map((notification, index) => (
        <NotificationItem
          key={index}
          avatarUrl={notification.avatarUrl}
          sender={notification.sender}
          message={notification.message}
          timeAgo={notification.timeAgo}
        />
      ))}
      {notifications.length > 5 && !showAllNotifications && (
        <button onClick={toggleShowAllNotifications} className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover-bg-gray-100 dark-bg-gray-600 dark-text-white dark-hover:underline">
          <div className="inline-flex items-center">
            <svg aria-hidden="true" className="mr-2 w-4 h-4 text-gray-500 dark-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3zm0 2v8h12V5H3z" />
            </svg>
            View all
          </div>
        </button>
      )}
    </div>
                 )}
      </div>
  
  );
}

export default Notification;
