const BASE_URL = "https://www.youtube.com/embed/";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={BASE_URL + video.id.videoId} />
      </div>
      <div className="ui segment">
        <div className="content">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p className="description">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
