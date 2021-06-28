import React, {useState} from "react";
import SearchPanel from "./Componants/SearchPanel.jsx"
import Books from "./Componants/Books.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Detail from "./pages/details.jsx";
import cookies from 'react-cookies'
const App = () => {
    const [bookId, setBookId] = useState('')
    const [ search , setSearch ] = useState(["","title",0]);
    const queryClient = new QueryClient()
    cookies.save('id',bookId)
    return(
        <>
        <BrowserRouter>
            <Switch>
            <Route exact path='/'>

            <SearchPanel setSearch={setSearch} />
            
            <QueryClientProvider client={queryClient}>
                <Books setBookId = {setBookId} searchQuery={search} />
            </QueryClientProvider>
            
            </Route>
            <Route exact path='/details'>
                <Detail/>
            </Route>
            </Switch>
        </BrowserRouter>
        </>
    )

}

export default App