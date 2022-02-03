import styled from "styled-components";
import CommentSection from "./components/CommentSection";
import CommentInputArea from "./components/CommentInputArea";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import appReducer from "./store/appReducer";

const CommentComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const rootReducer = combineReducers({
  appReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <CommentComponent>
        <CommentSection />
        <CommentInputArea btnText={"Send"} />
      </CommentComponent>
    </Provider>
  );
}

export default App;
