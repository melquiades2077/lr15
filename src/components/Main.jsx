import { Routes, Route } from "react-router-dom";

import News from "../pages/News";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

import image from "../assets/yfu.jpg";

function Main() {
    return (
        <main className="main">

            <section className="section">
                <h2>Информация</h2>

                <img
                    src={image}
                    alt="ЮФУ"
                    className="sideImage"
                />

                <p>
                    Факультет информатики и вычислительной техники.
                </p>
            </section>

            <article className="article">
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </article>

            <aside className="aside">
                <h2>Студент</h2>

                <p>
                    Афанасьев Виталий Александрович
                </p>

                <p>
                    ФИИТ
                </p>

                <p>
                    2 курс
                </p>
            </aside>

        </main>
    );
}

export default Main;