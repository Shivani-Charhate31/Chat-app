import React, { useEffect, useRef } from "react";
import { assets, messagesDummyData } from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const currentUser = "6749nghkf74io92";
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return selectedUser ? (
    <div className="h-full overflow-hidden relative backdrop-blur-lg">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 px-5 border-b border-stone-500">
        <img src={assets.profile_woman} alt="" className="w-10 rounded-full" />

        <p className="flex-1 text-xl text-white flex items-center gap-2">
          Martin Kohn
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow}
          className="md:hidden max-w-7"
        />

        <img src={assets.info} className="max-md:hidden w-5" />
      </div>

      {/* chat area */}

      <div className="flex flex-col gap-5 p-5 overflow-y-auto h-[calc(100%-80px)]">
        {messagesDummyData.map((msg) => {
          const isSender = msg.senderId === currentUser;

          return (
            <div
              key={msg._id}
              className={`flex gap-2 items-end
              ${isSender ? "justify-end" : "justify-start"}
              `}
            >
              {/* Receiver */}

              {!isSender && (
                <>
                  <div className="flex flex-col items-center">
                    <img
                      src={assets.profile_woman}
                      className="w-8 h-8 rounded-full"
                    />

                    <p className="text-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div
                    className="
                    bg-violet-500/40
                    px-4 py-3
                    rounded-2xl
                    rounded-bl-none
                    max-w-[260px]
                    text-white
                    "
                  >
                    {msg.text}
                  </div>
                </>
              )}

              {/* Sender */}

              {isSender && (
                <>
                  <div
                    className="
                    bg-violet-500/40
                    px-4 py-3
                    rounded-2xl
                    rounded-br-none
                    max-w-[260px]
                    text-white
                    "
                  >
                    {msg.text}
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src={assets.profile_panda}
                      className="w-8 h-8 rounded-full"
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

      <div className="absolute bottom--1 left-0 right-0 p-4">
        <div
          className="
    flex items-center
    gap-3
    bg-gray-100/10
    px-4 py-3
    rounded-full"
        >
          <input
            type="text"
            placeholder="Send a message"
            className="
      flex-1
      bg-transparent
      outline-none
      border-none
      text-white
      placeholder-gray-400
      text-sm"
          />

          {/* Upload Image */}

          <input type="file" id="image" accept="image/png,image/jpg" hidden />

          <label htmlFor="image">
            <img src={assets.gallery} alt="" className="w-5 cursor-pointer" />
          </label>

          {/* Send button */}

          <button>
            <img src={assets.send} alt="" className="w-7 cursor-pointer" />
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
