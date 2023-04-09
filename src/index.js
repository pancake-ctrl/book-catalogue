import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book';


function BookList() {
  
  const getBook =(id) =>{
    const book = books.find((book)=>book.id===id);
    console.log(book);
  }

  return (
    <> 
    <h1 className='List'>Book Catalogue</h1>
    <section className='bookList'>
    {books.map((book, i)=>{
      return ( 
        <Book {...book}  getBook={getBook} number = {i}/>
      )
    })};
  </section>
  </> 
  );  
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
// root.render(<Car />);