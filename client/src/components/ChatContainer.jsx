import React, { useEffect, useRef } from "react";
import { assets, messagesDummyData } from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const currentUser = "6749nghkf74io92";
  const scrollEnd = useRef(null);

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messagesDummyData]);

  return selectedUser ? (
    <div className="h-full min-h-0 flex flex-col overflow-hidden backdrop-blur-lg">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 px-5 border-b border-stone-500">
        <img
          src={selectedUser.profilePic}
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />

        <p className="flex-1 text-xl text-white flex items-center gap-2">
          {selectedUser.fullName}
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </p>

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow}
          className="md:hidden max-w-7 cursor-pointer"
          alt="Back"
        />

        <img
          src={assets.info}
          className="max-md:hidden w-5 cursor-pointer"
          alt="Info"
        />
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto p-5 flex flex-col gap-5">
        {messagesDummyData.map((msg) => {
          const isSender = msg.senderId === currentUser;

          return (
            <div
              key={msg._id}
              className={`flex gap-2 items-end ${
                isSender ? "justify-end" : "justify-start"
              }`}
            >
              {!isSender && (
                <>
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedUser.profilePic}
                      className="w-8 h-8 rounded-full"
                      alt="User avatar"
                    />

                    <p className="text-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="bg-violet-500/40 px-4 py-3 rounded-2xl rounded-bl-none max-w-65 text-white">
                    {msg.text}
                  </div>
                </>
              )}

              {isSender && (
                <>
                  <div className="bg-violet-500/40 px-4 py-3 rounded-2xl rounded-br-none max-w-65 text-white">
                    {msg.text}
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src={assets.profile_panda}
                      className="w-8 h-8 rounded-full"
                      alt="Current user avatar"
                    />

                    <p className="text-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}

        <div ref={scrollEnd}></div>
      </div>

      {/* Typing Area */}
      <div className="border-t border-gray-700 p-4 shrink-0">
        <div className="flex items-center gap-3 bg-gray-100/10 px-4 py-3 rounded-full">
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />

          <input hidden type="file" id="image" />

          <label htmlFor="image">
            <img
              src={assets.gallery}
              className="w-5 cursor-pointer"
              alt="Gallery"
            />
          </label>

          <button>
            <img src={assets.send} className="w-7 cursor-pointer" alt="Send" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="
      flex flex-col
      items-center
      justify-center
      gap-3
      bg-white/10
      max-md:hidden"
    >
      <img src={assets.apple} className="w-16" />

      <p className="text-white">Chat Anytime, Anywhere</p>
    </div>
  );
};

export default ChatContainer;
