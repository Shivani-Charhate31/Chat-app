import React, { useState } from "react";
import { assets } from "../assets/assets";

const RightsideBar = ({ selectedUser }) => {
  const [previewImg, setPreviewImg] = useState(null);

  const media = [assets.pic1, assets.pic2, assets.pic3, assets.pic4];

  return (
    selectedUser && (
      <>
        <div
          className="
h-full
overflow-y-auto
backdrop-blur-lg
border-l
border-gray-700
text-white
flex
flex-col
p-6"
        >
          <button
            className="
self-end
px-5
py-2
rounded-full
bg-linear-to-r
from-red-500
to-pink-500
hover:scale-105
transition"
          >
            Logout
          </button>

          <div
            className="
flex
flex-col
items-center
mt-6"
          >
            <img
              src={selectedUser.profilePic}
              className="
w-24
h-24
rounded-full"
            />

            <h2
              className="
mt-4
text-xl"
            >
              {selectedUser.fullName}
            </h2>

            <div
              className="
flex
gap-2
items-center"
            >
              <span
                className="
w-2
h-2
bg-green-500
rounded-full"
              />

              <p>Online</p>
            </div>
          </div>

          <div className="mt-8">
            <h3
              className="
text-gray-400"
            >
              Bio
            </h3>

            <p
              className="
mt-2
text-sm"
            >
              {selectedUser.bio}
            </p>
          </div>

          <div className="mt-6">
            <h3
              className="
text-gray-400"
            >
              Email
            </h3>

            <p
              className="
mt-2
text-sm"
            >
              {selectedUser.email}
            </p>
          </div>

          <div className="mt-8">
            <h3
              className="
mb-4
text-gray-300"
            >
              Media
            </h3>

            <div
              className="
grid
grid-cols-3
gap-2"
            >
              {media.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setPreviewImg(img)}
                  className="
w-full
h-20
rounded-lg
object-cover
cursor-pointer
hover:scale-105
transition"
                />
              ))}
            </div>
          </div>
        </div>

        {previewImg && (
          <div
            onClick={() => setPreviewImg(null)}
            className="
fixed
inset-0
bg-black/80
flex
justify-center
items-center
z-50"
          >
            <img
              src={previewImg}
              className="
max-w-[90%]
max-h-[90%]
rounded-xl"
            />
          </div>
        )}
      </>
    )
  );
};

export default RightsideBar;
