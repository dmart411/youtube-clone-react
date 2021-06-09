import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDeatails from "./VideoDetails";
import youtube from "../api/youtube";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
        setSelectedVideo(res.data.items[0]);
      })
      .catch((err) => console.log(err));
  };

  const onSelectVideo = (video) => {
    setSelectedVideo(video);
    console.log(selectedVideo);
  };

  return (
    <Container>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDeatails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onSelectVideo={onSelectVideo} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
