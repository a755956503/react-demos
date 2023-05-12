import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import ContextPage from '../pages/hooks/context';
import HookRoutes from '../pages/hooks';

// const routes = [
//   {
//     path: '/hooks',
//     children: [
//       {
//         path: '/hooks/context',
//         element: <ContextPage />
//       }
//     ]
//   }
// ]

// function RoutePages() {
//   return <RouterProvider router={createBrowserRouter(routes)}  />
// }

function RoutePages() {
  return (<Router>
    <HookRoutes />
  </Router>)
}
export default RoutePages;
