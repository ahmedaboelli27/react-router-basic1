import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import HomePage from "../Pages/Home";
import ContactPage from "../Pages/Contact";
import AboutUs from "../Pages/About"
import RootLayout from "../Pages/Layout";
import LearnLayout from "../Learn/Layout";
import QuickStartPage from "../Learn/QuickStartPage";


const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />}/>    
            <Route path="About" element={<ContactPage />} />
            <Route path="Contact" element={<AboutUs />} />
        </Route>

        <Route path="/Learn" element={<LearnLayout />}>
            <Route index element={<QuickStartPage />}/>
        </Route>
    </>

)
  );
  export default router