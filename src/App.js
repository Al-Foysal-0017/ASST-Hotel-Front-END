import "./App.css"
import 'semantic-ui-css/semantic.min.css'
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Rooms from "./pages/Rooms";
import Profile from "./pages/Profile";
import SingleRoom from "./pages/SingleRoom";
import DoubleRoom from "./pages/DoubleRoom";
import SuiteRoom from "./pages/SuiteRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import ROOM201 from "./pages/allSingleRoom/Room201"
import ROOM202 from "./pages/allSingleRoom/Room202"
import ROOM203 from "./pages/allSingleRoom/Room203"
import ROOM204 from "./pages/allSingleRoom/Room204"
import ROOM205 from "./pages/allSingleRoom/Room205"
import ROOM206 from "./pages/allSingleRoom/Room206"

import ROOM301 from "./pages/allDoubleRoom/Room301"
import ROOM302 from "./pages/allDoubleRoom/Room302"
import ROOM303 from "./pages/allDoubleRoom/Room303"
import ROOM304 from "./pages/allDoubleRoom/Room304"
import ROOM305 from "./pages/allDoubleRoom/Room305"
import ROOM306 from "./pages/allDoubleRoom/Room306"

import ROOM401 from "./pages/allSuiteRoom/Room401"
import ROOM402 from "./pages/allSuiteRoom/Room402"
import ROOM403 from "./pages/allSuiteRoom/Room403"
import ROOM404 from "./pages/allSuiteRoom/Room404"

import PrivateRoute from "./private/PrivateRoute"
import RouteLinks from "./private/RouteLinks"

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <RouteLinks path="/login" exact component={Login} />
        <RouteLinks path="/register" exact component={Register} />
        <PrivateRoute path="/rooms" exact component={Rooms} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/single-room" exact component={SingleRoom} />
        <PrivateRoute path="/double-room" exact component={DoubleRoom} />
        <PrivateRoute path="/suite-room" exact component={SuiteRoom} />

        <PrivateRoute path="/single/room-201" exact component={ROOM201} />
        <PrivateRoute path="/single/room-202" exact component={ROOM202} />
        <PrivateRoute path="/single/room-203" exact component={ROOM203} />
        <PrivateRoute path="/single/room-204" exact component={ROOM204} />
        <PrivateRoute path="/single/room-205" exact component={ROOM205} />
        <PrivateRoute path="/single/room-206" exact component={ROOM206} />

        <PrivateRoute path="/double/room-301" exact component={ROOM301} />
        <PrivateRoute path="/double/room-302" exact component={ROOM302} />
        <PrivateRoute path="/double/room-303" exact component={ROOM303} />
        <PrivateRoute path="/double/room-304" exact component={ROOM304} />
        <PrivateRoute path="/double/room-305" exact component={ROOM305} />
        <PrivateRoute path="/double/room-306" exact component={ROOM306} />

        <PrivateRoute path="/suite/room-401" exact component={ROOM401} />
        <PrivateRoute path="/suite/room-402" exact component={ROOM402} />
        <PrivateRoute path="/suite/room-403" exact component={ROOM403} />
        <PrivateRoute path="/suite/room-404" exact component={ROOM404} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
