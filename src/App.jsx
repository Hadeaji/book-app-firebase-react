import React, {useState} from "react";
import SearchPanel from "./Componants/SearchPanel.jsx"
import Books from "./Componants/Books.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
    const [ search , setSearch ] = useState(["","title",0]);
    const queryClient = new QueryClient()
    
    return(
        <>
            <SearchPanel setSearch={setSearch} />
            
            <QueryClientProvider client={queryClient}>
                <Books searchQuery={search} />
            </QueryClientProvider>
            
        </>
    )

}

export default App