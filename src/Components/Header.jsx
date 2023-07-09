import React, { useEffect } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Dropdown, Text, Loading } from "@nextui-org/react";

const Header = () => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  const menuBtnHandler = (keyVal) => {
    if (keyVal === "logout") {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  };
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <section className="header-section">
      <>
        {isAuthenticated ? (
          <span className="nav_name">Ohayo! {user.nickname} 👋</span>
        ) : (
          <span className="nav_name">Ohayo! 👋</span>
        )}
      </>
      <>
        {isAuthenticated ? (
          <Dropdown>
            <Dropdown.Trigger>
              <Avatar
                className="dropdown-trigger-img"
                src={user.picture}
                squared
                size="lg"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              color="primary"
              aria-label="User Actions"
              onAction={menuBtnHandler}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user.email}
                </Text>
              </Dropdown.Item>

              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div
            className="sign-in-btn shineEff"
            onClick={() => loginWithRedirect()}
          >
            <span>sign in</span>
          </div>
        )}
      </>
    </section>
  );
};

export default Header;
