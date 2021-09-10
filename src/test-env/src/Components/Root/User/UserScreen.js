import './UserScreen.css';
import {withModule} from "react-hoc-di";
import {useCallback, useEffect, useMemo, useState} from "react";

const UserScreen = props => {
  const {module} = props;
  const {loginManager} = module;
  const [user, setUser] = useState(null);
  
  const onUser = useCallback(user => {
    setUser(user);
  }, []);
  
  useEffect(() => {
    loginManager.addListener(onUser);
    return () => {
      loginManager.removeListener(onUser);
    }
  }, [loginManager, onUser]);
  
  const onLogoutClick = useCallback(() => {
    loginManager.logout();
  }, [loginManager]);

  const mainContent = useMemo(() => {
    if (!user) {
      return null;
    }

    const userElements = [];
    for (const key of Object.keys(user)) {
      userElements.push(
        <div key={key}>{`${key}: ${user[key]}`}</div>
      )
    }

    return (
      <div id='UserScreenBodyOuter'>
        <div id='UserScreenBody'>
          {userElements}
          <div id='UserScreenLogoutButton' onClick={onLogoutClick}>
            {'Logout'}
          </div>
        </div>
      </div>
    );
  }, [user, onLogoutClick]);

  return (
    <div id="UserScreen">
      {mainContent}
    </div>
  );
}

export default withModule(UserScreen);
