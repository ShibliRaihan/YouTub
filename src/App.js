import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetails from "./Components/ChannelDetails";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import SearchFeed from "./Components/SearchFeed";
import VideoDitails from "./Components/VideoDitails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
          <Navbar/>
          <Routes>
            <Route path={"/"} exact element={<Feed/>} />
            <Route path={"/video-ditals/:id"} element={<VideoDitails/>} />
            <Route path={"/channel/:id"} element={<ChannelDetails/>} />
            <Route path={"/search/:search"} element={<SearchFeed/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
