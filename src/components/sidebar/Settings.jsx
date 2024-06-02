// src/components/sidebar/Settings.jsx
import React, { useState } from 'react';
import '../../css/Settings.css';

const Settings = () => {
  const [profile, setProfile] = useState({
    username: 'Admin',
    email: 'admin@example.com',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(true);
  const [backup, setBackup] = useState({
    backupFrequency: 'Daily',
    lastBackup: '2023-05-20',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    // Logic to update theme in the application
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Logic to update language in the application
  };

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
    // Logic to update notification settings
  };

  const handlePrivacyToggle = () => {
    setPrivacy(!privacy);
    // Logic to update privacy settings
  };

  const handleBackupChange = (e) => {
    const { name, value } = e.target;
    setBackup({ ...backup, [name]: value });
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (profile.newPassword !== profile.confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    alert('Settings saved successfully!');
    // Here, you would typically send the updated settings to your server
  };

  return (
    <div className="settings">
      <h2>System Settings</h2>
      <form onSubmit={handleSaveSettings}>
        <section className="profile-settings">
          <h3>Profile Settings</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Current Password:
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={profile.newPassword}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Confirm New Password:
            <input
              type="password"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={handleProfileChange}
            />
          </label>
        </section>

        <section className="setting-option">
          <h3>Theme</h3>
          <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </section>

        <section className="setting-option">
          <h3>Language</h3>
          <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            {/* Add more language options as needed */}
          </select>
        </section>

        <section className="setting-option">
          <h3>Notifications</h3>
          <label>
            <input type="checkbox" checked={notifications} onChange={handleNotificationToggle} />
            Receive notifications
          </label>
        </section>

        <section className="setting-option">
          <h3>Privacy</h3>
          <label>
            <input type="checkbox" checked={privacy} onChange={handlePrivacyToggle} />
            Allow data tracking and sharing
          </label>
        </section>

        <section className="backup-settings">
          <h3>Data Backup</h3>
          <label>
            Backup Frequency:
            <select
              name="backupFrequency"
              value={backup.backupFrequency}
              onChange={handleBackupChange}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </label>
          <label>
            Last Backup: {backup.lastBackup}
          </label>
        </section>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
