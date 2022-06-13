import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Rooms";
import { RoomAdmin } from "./pages/Rooms/Admin";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={RoomAdmin} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
