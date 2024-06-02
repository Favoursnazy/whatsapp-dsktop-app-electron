import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WrapperComponent from './components/Wrapper';
import ChatRoute from './routes/ChatRoute';
import DefaultChatPage from './components/routes/chat-page-comp/DefaultChatPage';
import ChatPage from './routes/ChatPage';
import CallsPage from './routes/CallsPage';
import StatusPage from './routes/StatusPage';
import SettingsPage from './routes/SettingsPage';
import SettingsDetails from './components/routes/settings/SettingsDetails';
import AppearanceSettingsPage from './components/routes/settings/AppearanceSettingsPage';
import Aos from 'aos';
import React from 'react';

export default function App() {
  Aos.init();
  React.useLayoutEffect(() => {
    window.electron.ipcRenderer.getDBItem('color_name');
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<WrapperComponent />}
          children={[
            <Route
              path="/chat"
              element={<ChatRoute />}
              children={[
                <Route path="/chat/" element={<DefaultChatPage />} />,
                <Route path="/chat/:conversationId" element={<ChatPage />} />,
              ]}
            />,
            <Route
              path="/calls"
              element={<CallsPage />}
              children={[<Route path="/calls" element={<DefaultChatPage />} />]}
            />,
            <Route
              path="/status"
              element={<StatusPage />}
              children={[
                <Route path="/status" element={<DefaultChatPage />} />,
              ]}
            />,
            <Route
              path="/settings"
              element={<SettingsPage />}
              children={[
                <Route path="/settings" element={<DefaultChatPage />} />,
                <Route
                  path="/settings/chat-settings"
                  element={<SettingsDetails />}
                />,
                <Route
                  path="/settings/appearance"
                  element={<AppearanceSettingsPage />}
                />,
              ]}
            />,
          ]}
        />
      </Routes>
    </Router>
  );
}
