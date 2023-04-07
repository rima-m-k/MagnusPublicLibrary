import React from 'react'
import { useSelector } from 'react-redux';
import NavMenu from '../../components/UserNavigation';
import { Link } from 'react-router-dom';
function AllBooks() {
    const books = useSelector(state => state.book);   


  return (
    <>
    <NavMenu />
    <div className='container'>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-10 m-4 sm:px-2 md:px-4 lg:px-8 mt-4">
  {books.map(book => (
    <div key={book.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
        <Link to={`/books/${book._id}`} >    
          <img src={`http://localhost:8000/Images/${book.image[0].frontCover[0].filename}`} alt={book.title} className="h-48 w-full object-cover" />
        </Link>

      <div className="px-4 py-2">
        <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
      </div>
    </div>
  ))}
</div>
</div>
    </>
  )
}

export default AllBooks
