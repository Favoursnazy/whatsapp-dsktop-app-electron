import React, { useState } from 'react';
import { ReactComponent as VideoIcon } from '../../../../assets/icons-svg/video.svg';
import { ReactComponent as CallIcon } from '../../../../assets/icons-svg/call-27.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icons-svg/search.svg';
import { ReactComponent as StarredIcon } from '../../../../assets/icons-svg/Icon (3).svg';
import { ReactComponent as MuteIcon } from '../../../../assets/icons-svg/Icon (2).svg';
import { ReactComponent as SavedToDownload } from '../../../../assets/icons-svg/Icon (4).svg';
import { ReactComponent as PadLock } from '../../../../assets/icons-svg/Icon (5).svg';
import { ReactComponent as PlusIcon } from '../../../../assets/icons-svg/plus.svg';
import { ListGroup, ListItem } from '../../shared/ReUseables';

const ChatPageHeader = React.memo((props: any) => {
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);
  return (
    <div className="chat-page-header">
      <div onClick={() => setShowDropDown((prev) => !prev)}>
        <div>
          <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg" />
          {showDropDown && <DropDownEl />}
        </div>
        <div>
          <div>Favoursnazy</div>
          <div>last seen yesterday at 17:53</div>
        </div>
      </div>
      <div className="icon-container">
        <div>
          <VideoIcon />
        </div>
        <div>
          <CallIcon className="smaller" />
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
});

const DropDownEl = React.memo((props: any) => {
  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown-inner">
        <div className="first">
          <div>
            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/521.jpg" />
          </div>
          <div>Favoursnazy</div>
          <div className="phone">+234 903 021 7486</div>
        </div>
        <div className="second">
          <div>
            <CallIcon className="smaller" />
            <div>Audio</div>
          </div>
          <div>
            <VideoIcon />
            <div>Video</div>
          </div>
          <div>
            <SearchIcon />
            <div>Search</div>
          </div>
        </div>
        <div className="third px-2">
          <div className="pb-3 w-100">
            <ListGroup>
              <ListItem
                icon={<StarredIcon />}
                title="Starred Messages"
                isRoute={true}
              />
            </ListGroup>
          </div>
          <div className="pb-3 w-100">
            <ListGroup>
              <ListItem icon={<MuteIcon />} title="Mute" isRoute={false} />
              <ListItem
                icon={<SavedToDownload />}
                title="Save to Downloads"
                isRoute={false}
              />
            </ListGroup>
          </div>
          <div className="pb-3 w-100">
            <ListGroup>
              <ListItem
                icon={<PadLock />}
                title="Encryption"
                info="Messages and calls are end-to-end encrypted. click to verify"
                isRoute={false}
              />
            </ListGroup>
          </div>
        </div>
        <div className="fourth px-2 mb-3">
          <div>No Groups in Common</div>
          <ListItem
            icon={<PlusIcon />}
            title="create Group with Favoursnazy"
            style={{ color: 'var(--app-light-green)' }}
          />
        </div>
        <div className="fifth px-2 mb-3 w-100">
          <div className="pb-3 w-100">
            <ListGroup>
              <ListItem title="Share contact" />
              <ListItem title="Export chat" />
              <ListItem title="Clear chat" />
            </ListGroup>
          </div>
        </div>
        <div className="sixth px-2 mb-3 w-100">
          <div className="pb-3 w-100">
            <ListGroup>
              <ListItem title="Block Favoursnazy" />
              <ListItem title="Report Favoursnazy" />
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
});
export default ChatPageHeader;
