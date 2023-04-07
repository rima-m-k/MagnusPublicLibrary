import React from 'react'
import AsstNavigationBar from '../../components/AsstNavigationBar'
import { Link } from 'react-router-dom'
import AddAuthors from './AddAuthor'
import AddGenre from './AddGenre'
function dashboard() {
  return (
    <div>
      <AsstNavigationBar />
      <Link  to="/asst/addAuthor" element={<AddAuthors />} >Add Authors</Link>
      <Link  to="/asst/addGenre" element={<AddGenre />} >Add Genre</Link>
    </div>
  )
}

export default dashboard
