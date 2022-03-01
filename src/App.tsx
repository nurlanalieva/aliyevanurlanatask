import "./App.scss";
import { CardList } from "./domain/Card/CardList";
import { CardItem } from "./domain/Card/CardItem";
import { TransactionList } from "./domain/Transaction/TransactionList";
import { TransactionItem } from "./domain/Transaction/TransactionItem";
import { NotFound } from "./domain/NotFound";
import { Home } from "./domain/Home";
import { MainLayout } from "./domain/Layout";
import { Routes, Route } from "react-router-dom";
import { ROUTE, CARD_TRANSACTION_ROUTE } from "./domain/routing/routing";

function App() {
  return (
    //  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.TRANSACTIONS} element={<TransactionList />} />
        <Route
          path={ROUTE.CARD_TRANSACTIONS_ACTIVITY}
          element={<TransactionList />}
        />
        <Route path={ROUTE.TRANSACTION} element={<TransactionItem />} />
        <Route
          path={ROUTE.CARD_TRANSACTIONS__ACTIVITY}
          element={<TransactionItem />}
        />
        <Route path={ROUTE.TRANSACTION_ACTIVITY} element={<CardItem />}>
          <Route
            path={CARD_TRANSACTION_ROUTE.TRANSACTION_ACTIVITY}
            element={<TransactionItem />}
          />
        </Route>
        <Route path={ROUTE.CARDS} element={<CardList />} />
        <Route path={ROUTE.CARD} element={<CardItem />}>
          <Route
            path={CARD_TRANSACTION_ROUTE.CARD_ACTIVITY}
            element={<CardItem />}
          />
        </Route>
        <Route path={ROUTE.NOTFOUND} element={<NotFound />} />
      </Routes>
    </MainLayout>
    //  </BrowserRouter>
  );
}
export default App;
