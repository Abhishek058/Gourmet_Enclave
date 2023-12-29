import React, { useState } from "react";
import { AiOutlinePlayCircle, AiOutlineClose } from "react-icons/ai";

function VideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <div className="videosection flex items-center justify-center h-[600px]">
        <AiOutlinePlayCircle
          className="text-[150px] text-white cursor-pointer"
          onClick={() => {
            setPlayVideo(true);
          }}
        />
      </div>
      {playVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="fixed bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={() => {
              setPlayVideo(false);
            }}
          >
            <div onClick={(event) => event.stopPropagation()}>
              <AiOutlineClose
                className="absolute right-6 top-32 text-3xl text-gray-600 cursor-pointer"
                onClick={() => {
                  setPlayVideo(false);
                }}
              />
              <iframe
                className="md:w-[630px] h-[350px] xl:w-[1000px]"
                src="https://drive.google.com/file/d/1eIyr_ZyqP2eMMhQrk5016SV9oM_IqrNI/preview"
                title="Feel The Luxury"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoSection;
