import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import { DarkMode } from "./components";
import Card from "./components/Card";

function App() {
  const SocialItem = ({ title, href }: any) => <a href={href}>{title}</a>;

  return (
    <div>
      <div className="theme-switcher">
        <DarkMode />
      </div>
      <Alert />
      <div style={{ marginTop: 50 }}>
        <div>
          <Card
            avatar={
              <>
                {/*  <img
                  src="https://facit-modern.omtanke.studio/static/media/wanna7.28ce40c36e82dca19195.webp"
                  style={{ width: 100, height: 100 }}
                /> */}
              </>
            }
            actions={[
              <SocialItem title="Google" href="/#google" />,
              <SocialItem title="Instagram" href="/#instagram" />,
              <SocialItem title="Github" href="/#github" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
