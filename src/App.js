import { BrowserRouter } from "react-router-dom";

import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Head />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;