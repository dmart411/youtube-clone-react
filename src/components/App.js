import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

function App() {
  const [videos, setVideos] = useState([]);

  const onFormSubmit = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <SearchBar onFormSubmit={onFormSubmit} />
      <VideoList videos={videos} />
    </Container>
  );
}

export default App;
