import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import VideoList from "./Video/VideoList";
import Video from "./Video/Video";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function Index() {
    const isLoggedIn = Boolean(localStorage.getItem('token'));
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/video" element={<VideoList />}>
                        </Route>
                        <Route path="/video/:id" element={<Video />}>
                        </Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn />}>
                        </Route>
                        <Route path="/signup" element={<SignUp />}>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
        </div>

    )
}