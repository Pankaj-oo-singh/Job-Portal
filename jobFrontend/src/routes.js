import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import ShopapplicationWapper from './Pages/ShopapplicationWapper';


import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';


import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ThankYouPage from './Pages/ThankyouPage/ThankYouPage';


// import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";
import OAuth2LoginCallback from './Pages/OAuth2LoginCallback';

import Findjobs from './Pages/Findjobs';
import ProfilePage from'./Pages/Account/ProfilePage'
import GetMyProfilePage from './Pages/Account/GetMyProfilePage';
import PostJob from './Pages/PostJobs/PostJob'
import JobPage from './Pages/PostJobs/JobPage';
import ApplyJob from './Pages/PostJobs/ApplyJob';
import JobHistoryPage from './Pages/PostJobs/JobHistory';
import AppliedJobsPage from './Pages/PostJobs/AppliedJobsPage';
import PostedJobsPage from './Pages/PostJobs/PostedJobsPage';
import FindTalentPage from './Pages/PostJobs/FindTalentPage';






const router = createBrowserRouter([
  

    {
        path: '/',
        element: <ShopapplicationWapper/>,
        children:[
            {
                path: '/',
                element: <App />,
               
              },
              {
                path: "/jobs",
                element: <Findjobs />
              },
              {
                path: "/talent",
                element: <FindTalentPage />
              },
              {
                path: "/post-job",
                element: <PostJob />
              },
              {
                path: "/profile",
                element: <ProfilePage />
              },
               {
                path: "/profile/me",
                element: <GetMyProfilePage />
              },{
                path: "/job/:id",
                element: <JobPage />
               },
               {
                path: "/apply/:id",
                element: <ApplyJob />
               },
               {
                path: "/job-history",
                element: <JobHistoryPage />
               },
               {
                path: "/posted-jobs",
                element: <PostedJobsPage />
               },

             
             
              
            
              {
                path: '/login',
                element: <Login />,
              },
              {
                path: '/signup',
                element: <Signup />,
              },

             
             
              {
                path:'/oauth2/callback',
                element:<OAuth2LoginCallback />
              },
              {
                path: '/thank-you',
                element: <ThankYouPage />,
              },
              { path: '*', element: <NotFoundPage /> },

        ]
    },
 
]);

export default router;


