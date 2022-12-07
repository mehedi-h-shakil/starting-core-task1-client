import { createBrowserRouter } from "react-router-dom";
import Borrowed from "../components/Borrowed";
import Home from "../components/Home";
import Main from "../layout/Main";
import Purchased from "../components/Purchased";
import Returned from "../components/Returned";
import ComeIn from "../components/ComeIn";
import GoOut from "../components/GoOut";
import StockSold from "../components/StockSold";
import StockLend from "../components/StockLend";
import StockReturned from "../components/StockReturned";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comeIn",
        element: <ComeIn />,
      },
      {
        path: "/goOut",
        element: <GoOut />,
      },
      {
        path: "/purchased",
        element: <Purchased />,
      },
      {
        path: "/borrowed",
        element: <Borrowed />,
      },
      {
        path: "/returned",
        element: <Returned />,
      },
      {
        path: "/stockSold",
        element: <StockSold />,
      },
      {
        path: "/stockLend",
        element: <StockLend />,
      },
      {
        path: "/stockReturned",
        element: <StockReturned />,
      },
    ],
  },
]);
