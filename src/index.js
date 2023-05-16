import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Book from './book'
import { books } from './books'

const BookList = () => {
  return (
    <>
      <h1>Best Selling Books List</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={index} number={book.id} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

export default BookList
