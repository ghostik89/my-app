import { ToastContainer } from "react-toastify";
import { SearchFormBlock } from "./components/SearchFormBlock";
import { SearchStubBlock } from "./components/searchUtils/SearchStubBlock";
import { UserBlock } from "./components/UserBlock";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="main-container">
      <UserBlock favoriteItemsAmount={0}/>
      <div className="container">
        <SearchFormBlock/>
        <div className="results">
          <SearchStubBlock />
        </div>
      </div>
    </div>
    </>
  );
}
