import VideoItem from "./VideoItem";

export const VideoList = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video) => {
    return <VideoItem video={video} onClick={onSelectVideo} key={video.id.videoId}/>;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
