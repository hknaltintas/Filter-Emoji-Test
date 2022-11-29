import "./App.css";
import { EmojiProvider } from "./context/EmojiContext";
import Header from "./componenets/Header/Header";
import SearchInput from "./componenets/SearchInput/SearchInput";
import EmojiResult from "./componenets/EmojiResult/EmojiResult";

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <Header />
        <SearchInput/>
        <EmojiResult/>
      </EmojiProvider>
    </div>
  );
}

export default App;
