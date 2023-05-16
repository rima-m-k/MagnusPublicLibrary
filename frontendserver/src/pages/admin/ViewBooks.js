import React, { useEffect, useState } from 'react'
import { getBook } from '../../services/adminServiceHelpers';
import DataTable from 'react-data-table-component';
import Spinner from '../../components/Spinner'


function ShowBooks() {
  const [isLoasing,setIsLoading] = useState(false)

   const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [search,setSearch] = useState("")
  const [filteredData,setFilteredData] = useState([])
  useEffect(() => {
    setIsLoading(true)

    getBook()
      .then((res) => {
        console.log(res);
        setBooks(res.data);
        setFilteredData(res.data)
      })
      .catch((err) => {
        console.log(err);
        setError(err.response);
      })
    .finally(() => setIsLoading(false))

  }, []);
  useEffect(() => {
const result = books.filter(book => book.title.toLowerCase().match(search.toLowerCase()))
setFilteredData(result)

  },[search])

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width:'200px',
      wrap:true,
     style:{  fontSize:'15px'}
    },
    
    {
      name: "Author",
      selector: (row) => row.author.AuthorName,
      width:'150px',
      style:{  fontSize:'15px'}
    },

    {
      name: "Genre",
      selector: (row) => row.genre.genreName,
      width:'150px',
      style:{  fontSize:'15px'}
    },
    {
      name: "On Hold/Copy",
      selector: (row) => `0/ ${row.copy}`,
      width:'150px',
      right:true,
      style:{  fontSize:'15px'}
    },

  //   {
  //     name: "Description",
  //     selector: (row) => row.description,
  //     width:'800px',
  //    wrap:true,
  //    allowOverflow:false,
  //    style:{  fontSize:'14px' ,padding:'3px'}

      
  //   },
  //   // {
    //   name:"Actions",
    //   cell: row => (
    //     <button 
    //     className="bg-blue-900 p-2 hover:bg-blue-800 text-white rounded"
    //     >Edit</button>
    //   )
    // }
  ];

  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data.synopsis, null, 2)}</pre>;
    return (
    <>
       {!isLoasing ?
         <DataTable
            title="Book Catalogue"
            columns={columns}
            data={filteredData}
            pagination
            fixedHeader
            theme="solarized"
            highlightOnHover
            actions={
              <button className="px-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
                EXPORT
              </button>
            }
            subHeader
            subHeaderComponent={
              <input
                type="search"
                placeholder="Search Here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-blue-800 bg-  gray-100 border-b-2 block w-25 rounded py-2 px-3 mb-1"
                />
              }
              responsive 
              expandableRows
              expandableRowsComponent={ExpandedComponent}
              // subHeaderAlign="left"
              // striped
              // dense  
              // selectableRows
              // selectableRowsHighlight
              // noContextMenu ={true}
              // noTableHead={true}
              // fixedHeaderScrollHeight='450px'
          />
          :
        
<Spinner isUser = {false} /> 
          }
       
    </>
  )
}

export default ShowBooks
