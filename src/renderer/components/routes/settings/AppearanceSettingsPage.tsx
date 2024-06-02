import React, { useState } from 'react';
import { ListGroup, ListItem } from '../../../shared/ReUseables';
import { ReactComponent as AngleBackIcn } from '../../../../../assets/icons-svg/angle-right (1).svg';
import { useNavigate } from 'react-router-dom';
import { TAppearanceMode } from '../../../shared/types';

const AppearanceSettingsPage = React.memo((props: any) => {
  const navigate = useNavigate();
  const store_name = 'color_name';
  const [appMode, setAppMode] = useState<TAppearanceMode>('light');
  const isDarkMode = document.documentElement.classList.contains('dark');

  React.useLayoutEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setAppMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleSetColorMode = React.useCallback((mode: TAppearanceMode) => {
    mode == 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    setAppMode(mode);
    window.electron.ipcRenderer.setDBItem(store_name, mode);
  }, []);

  return (
    <div data-aos="fade-right" className="route-comp-1 settings-list w-100">
      <div className="back-icon">
        <AngleBackIcn onClick={() => navigate(-1)} />
      </div>
      <div className="px-3 mt-4">
        <div className="list-title">Appearance</div>
        <ListGroup>
          <div>
            <ListItem title="Same as System" style={{ fontSize: '80%' }} />
          </div>
          <div onClick={() => handleSetColorMode('light')}>
            <ListItem
              className={appMode == 'light' ? 'selected' : ''}
              title="Light Mode"
              style={{ fontSize: '80%' }}
            />
          </div>
          <div onClick={() => handleSetColorMode('dark')}>
            <ListItem
              className={appMode == 'dark' ? 'selected' : ''}
              title="Dark Mode"
              style={{ fontSize: '80%' }}
            />
          </div>
        </ListGroup>
      </div>
    </div>
  );
});

export default AppearanceSettingsPage;
