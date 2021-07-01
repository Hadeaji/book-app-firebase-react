import React, {useState} from "react";
import SearchPanel from "./Componants/SearchPanel.jsx"
import Books from "./Componants/Books.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Detail from "./pages/details.jsx";

const App = () => {
    
    const [ search , setSearch ] = useState(["","title",0]);
    const queryClient = new QueryClient()
  
    return(
        <>
        <BrowserRouter>
            <Switch>
            <Route exact path='/'>

            <SearchPanel setSearch={setSearch} />
            
            <QueryClientProvider client={queryClient}>
                <Books  searchQuery={search} />
            </QueryClientProvider>
            
            </Route>
            <Route exact path='/details/:id'>
                <Detail/>
            </Route>
            </Switch>
        </BrowserRouter>
        </>
    )

}

export default App