import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast"

import ProductDetails from "./App-Restaurant/ProductDetails/ProductDetails"
import ShoppinCart from "./App-Restaurant/ShoppinCart/ShoppinCart"
import FavoritesItems from "./App-Restaurant/Favorites/Favorites"
import ProvidRouter from "./App-Restaurant/Ui/ProvidRouter"
import RouterOrder from "./App-Restaurant/Ui/RouterOrders"
import Setting from "./App-Restaurant/setting/setting"
import Orders from "./App-Restaurant/Orders/Orders"
import Order from "./App-Restaurant/order/order"
import Singin from "./App-Restaurant/User/Singin"
import Login from "./App-Restaurant/User/Login"
import Home from "./App-Restaurant/Home/Home"
import Menu from "./App-Restaurant/Menu/Menu"
import MinApp from "./App-Restaurant/AppMin"


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60*1000
    }
  }
})


const router = createBrowserRouter([
  {
    path:"/",
    element:<ProvidRouter> <MinApp /> </ProvidRouter>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Menu",
        element:<Menu />
      },
      {
        path:"/Menu/:IDProduct/:CategorieProduct",
        element:<ProductDetails />
      },
      {
        path:"/Orders",
        element:<RouterOrder><Orders /></RouterOrder>
      },
      {
        path:"/ShoppinCart",
        element:<ShoppinCart />
      },
      {
        path:"/Setting",
        element:<Setting />
      },
      {
        path:"/Favorites",
        element:<FavoritesItems />
      },
      {
        path:"/Singin",
        element:<Singin />
      },
      {
        path:"/Login",
        element:<Login/>
      }
    ]
  },
  {
    path:"/Order",
    element:<Order />
  }
])


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{margin:"8px"}}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error:{
            duration:800
          },
          style:{
            fontSize:"16px",
            maxWidth:"500px",
            padding:"16px 24px",
            background: '#363636',
            color: '#fff',
          }
        }}
        />
    </QueryClientProvider>
  )
}

export default App
