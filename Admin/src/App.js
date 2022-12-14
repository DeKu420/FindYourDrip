import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
//import WidgetLg from "./components/widgetLg/WidgetLg";
import Transaction from "./pages/transaction/transaction";
import Login from "./pages/login/Login"
import UserAnalytics from "./components/userAnalytics/UserAnalytics";
import Sales from "./components/sales/Sales"
import { useSelector } from "react-redux";

function App() {

  const admin = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.isAdmin
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.isAdmin;
    } else { return '' }
  };

  // const admin = useSelector((state) => state.user?.currentUser?.isAdmin)
  // console.log(admin)

  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  //const admin = useSelector((state) => state.user && state.user.currentUser && state.user.currentUser.isAdmin)
  
  console.log(admin)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/transactions">
                <Transaction />
              </Route>
              <Route path="/userAnalytics">
                <UserAnalytics />
              </Route>
              <Route path="/Sales">
                <Sales />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
