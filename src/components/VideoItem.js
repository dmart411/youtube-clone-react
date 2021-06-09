import "./VideoItem.css";

const VideoItem = ({ video, onClick }) => {
  return (
    <div onClick={() => onClick(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="Generic placeholder"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
