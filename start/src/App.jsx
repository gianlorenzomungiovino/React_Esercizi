// Crea un nuovo branch partendo dal primo esercizio sui "props".

// Modifica il componente App per includere un componente Routes.
// Aggiungi una singola route con il percorso / che renderizza il componente Welcome, passando una proprietà name al componente.
// Renderizza il componente App all'interno di un componente BrowserRouter.
// Aggiungi una nuova route con il percorso /counter che renderizza il componente Counter preso dal primo esercizio sullo "state".

// Aggiungi una route con il percorso /users/:username che renderizza un componente ShowGithubUser. Questo componente deve ricevere il parametro username dal percorso e utilizzarlo per renderizzare un componente GithubUser, passando il valore ricevuto come proprietà.

// Aggiungi tre link all'interno del componente principale App per navigare verso i tre percorsi sopra descritti.

// Aggiungi una route per gestire i percorsi non esistenti (Not Found) e che renderizza un messaggio d'errore.

// Crea un componente GithubUserList che recupera i dati dall'API https://api.github.com/users e mostra una lista di link con i nomi utente di GitHub. Cliccando su un nome utente, si deve mostrare il componente ShowGithubUser.

// Aggiungi una route con il percorso /users che renderizza il componente GithubUserList.

// Se esiste una route /users/:username, rimuovila dal componente App e aggiungi invece una nuova route annidata all'interno del percorso /users.
// Aggiungi una route "index" al percorso /users che mostra il messaggio "Aggiungi un utente e selezionalo".

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./componenti/welcome";
import { Counter } from "./componenti/Counter";
import ShowGithubUser from "./componenti/ShowGithubUser";
import GithubUserList from "./componenti/GithuUserList";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/counter"}>Counter</Link> |
        <Link to={"/users"}> Github Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Gianlorenzo" age={34} />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
