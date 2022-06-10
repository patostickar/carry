import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllLocations } from "./redux/searchBar";
import { fetchTestimonials } from "./redux/testimonials";
import { ClearUser, fetchUser } from "./redux/user.js";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./protected-route";
import axios from "axios";
import logError from "./components/GeneralFuntions/logError";
import About from "./pages/About";
import Account from "./pages/Account";
import AdminCard from "./components/AdminPanel/AdminPanelCard";



import CarCreate from "./components/AdminPanel/CreateForms/CarCreate";
import CarTypeCreate from "./components/AdminPanel/CreateForms/CarTypeCreate";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LocationCreate from "./components/AdminPanel/CreateForms/LocationCreate";
import Navbar from "./components/Navbar";
import NotAllowed from "./pages/NotAllowed";
import NotFound from "./pages/NotFound";
import Reservation from "./pages/Reservation";
import Response from "./pages/MPrespose";
import SearchResults from "./pages/SearchResults";
import TermsAndConditions from "./pages/TermsAndConditions/";
import User from "./components/AdminPanel/AdminPages/AdminComponents/sections/User";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(ClearUser());
    } else {
      async function setCustomer() {
        try {
          await axios.post("/customers", user);
        } catch (error) {
          logError(error);
        }
        dispatch(fetchUser(user.email));
      }
      setCustomer();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(fetchAllLocations());
    dispatch(fetchTestimonials());
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact path="/adminPanel"
          element={<ProtectedRoute component={AdminCard} />}
        />
        <Route
          path="/cartypecreate"
          element={<ProtectedRoute component={CarTypeCreate} role="admin" />}
        />{" "}
        {/* componenete de adminPanel */}
        <Route
          path="/locationcreate"
          element={<ProtectedRoute component={LocationCreate} role="admin" />}
        />{" "}
        {/* componenete de adminPanel */}
        <Route path="/user" element={<User />} />

        <Route
          path="/carcreate"
          element={<ProtectedRoute component={CarCreate} role="admin" />}
        />




     
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      
      

        <Route path="/notAllowed" element={<NotAllowed />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Account} />}
        />
        <Route path="/reservation" element={<Reservation />} />
        <Route
          path="/Response"
          element={<ProtectedRoute component={Response} />}
        />
        <Route path="/searchResult" element={<SearchResults />} />
        <Route path="/terminos-condiciones" element={<TermsAndConditions />} />
        {/* <Route
          path='/usermanagement'
          element={<ProtectedRoute component={AdminUsersManagement} />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
