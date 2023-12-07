import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


//createContext() specialus komponentas
export const BooksContext = createContext(); 

    const booksUrl = 'https://in3.dev/knygos/';
    const typesUrl = 'https://in3.dev/knygos/types/';

//naujas komponentas
export const BooksProvider = ({children}) => {

    const [books, setBooks] = useState(null); // use Steitas

    const [types, setTypes] = useState(null); // use Steitas

    useEffect(_ => {       // use Efectas
        axios.get(booksUrl)
        .then(res => {setBooks(res.data);
            console.log(res.data);
        });
    }, []);
    
    useEffect(_ => {       // use Efectas
        axios.get(typesUrl)
        .then(res => {setTypes(res.data);
            console.log(res.data);
        });
    }, []);


  return (<BooksContext.Provider value={{books}}>
      {children}
    </BooksContext.Provider>
  )
}