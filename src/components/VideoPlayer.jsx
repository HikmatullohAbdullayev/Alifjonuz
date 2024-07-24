const VideoPlayer = ({ url, title }) => (
  <div className="video-container  w-[750px] h-[400px] text-center mx-auto table1005:w-full mobile530:h-[300px]">
    <iframe
      className="block w-full h-full"
      src={url}
      frameBorder={0}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowFullScreen
    />

    <p className="text-start text-[18px] text-primary font-bold py-[16px] my-[10px] ">
      {title}
    </p>
  </div>
)

export default VideoPlayer
