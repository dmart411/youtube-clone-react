import axios from "axios";

const KEY = "AIzaSyAYgCq1-xqGGt9kNohYT9lDnfS0NMYM9Jc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 8,
        key: KEY
    }
});