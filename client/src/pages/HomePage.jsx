import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";
import RightsideBar from "../components/RightsideBar";

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="w-full h-screen p-5">
      <div
        className={`
          backdrop-blur-xl
          border
          border-gray-600
          rounded-2xl
          overflow-hidden
          h-full
          grid

          ${
            selectedUser
              ? "md:grid-cols-[1fr_1.8fr_1fr]"
              : "md:grid-cols-[1fr_2fr]"
          }
        `}
      >
        <SideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        <ChatContainer
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        {selectedUser && (
          <RightsideBar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
