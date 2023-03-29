import React, { lazy, Suspense,useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
//UNIVERSAL DISPLAY
// app entry point
import LandingPage from './components/common/LandingPage'
import AboutUs from './components/common/AboutUs';
import LogIn from './components/common/LogIn';

// OWNER DASHBOARD
//dashboard
import OwnerDashboard from './components/owners/OwnerDashboard';
import RegisterOwner from './components/owners/RegisterOwner';
// create bike
import CreateBike from './components/owners/CreateBike';
// all riders
const AllRiders = lazy(() =>
  import("./components/owners/AllRiders")
);
// ownerriders
const MyRiders = lazy(() =>
  import("./components/owners/MyRiders")
);
// single rider
import RiderDetails from './components/owners/RiderDetails';
import RiderLogIn from './components/common/RiderLogIn';
// RIDER DASHBOARD
// dashboard
import RiderDashboard from './components/riders/RiderDashboard';
import RegisterRider from './components/riders/RegisterRider';
// allbikes view
const AllBikes = lazy(() =>
  import("./components/riders/AllBikes")
)
// view single bike
import BikeDetails from './components/riders/BikeDetails';
//view rider bikes
const RiderBikes = lazy(() =>
  import("./components/riders/RiderBikes")
)
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/o-me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Suspense fallback={<h2>Loading, Please wait...</h2>}>
        <Routes>   
          {/* GENERAL ROUTE FOR ENTRY  */}
          <Route path='/' element={<LandingPage/>}/>  
          <Route path='/aboutus' element={<AboutUs/>}></Route>     
          {/* OWNER DASHBOARD COMPONENTS */}
          <Route path="/owner">
            <Route index={true} element={<RegisterOwner/>}></Route>
            <Route path='login' element={<LogIn/>}/>
            <Route path='dashboard' element={<OwnerDashboard />}/>
            {/* new bike */}
            <Route path="new-bike" element={<CreateBike/>}/>
            {/* see rider */}
            <Route path='riders'>
              <Route index={true}  element={<AllRiders />}></Route>
              <Route path='view' element={<RiderDetails/>}/>
            </Route>
            {/* see owner rider */}
            <Route path='myriders' element={<MyRiders />}>
              <Route path='view' element={<RiderDetails/>}/>
            </Route>
          </Route>
          {/* RIDER DASHBOARD COMPONENTS */}
          <Route path="/rider">
            <Route index={true} element={<RegisterRider/>}></Route>
            <Route path='login' element={<RiderLogIn/>} />
            <Route path='dashboard' element={<RiderDashboard />}/>
            {/* see all bikes */}
            <Route path='bikes' >
              <Route index={true} element={<AllBikes />}></Route>
              <Route path='view' element={<BikeDetails/>}/>
            </Route>
            {/* see rider bikes */}
            <Route path='mybikes' element={<RiderBikes />}>
              <Route path='view' element={<BikeDetails/>}/>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
