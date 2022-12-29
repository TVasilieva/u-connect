import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import AdsSection from "./AdsSection";
import Content from "./Content";
import "./style.scss";

const MainPage = () => {
  const [isSidebarOpened, setSidebarOpened] = useState<boolean>(true);
  return (
    <>
      <Header onClick={() => setSidebarOpened(!isSidebarOpened)} />
      <div className="main-page">
        {isSidebarOpened && <Sidebar />}
        <Content />
        <AdsSection />
      </div>
    </>
  );
};

export default MainPage;
