import React, { useEffect, useState } from "react";
// import SideBar from "../../components/AdminSideBar";
import DataTable from "react-data-table-component";
import { getGenre } from "../../services/adminServiceHelpers";
import Spinner from '../../components/Spinner'

function ShowGenre() {
  const [isLoasing,setIsLoading] = useState(false)
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [search,setSearch] = useState("")
  const [filteredData,setFilteredData] = useState([])
  useEffect(() => {
    setIsLoading(true)

    getGenre()
      .then((res) => {
        console.log(res);
        setGenres(res.data);
        setFilteredData(res.data)
      })
      .catch((err) => {
        console.log(err);
        setError(err.response);
      })
    .finally(() => setIsLoading(false))

  }, []);
  useEffect(() => {
const result = genres.filter(genre => genre.genreName.toLowerCase().match(search.toLowerCase()))
setFilteredData(result)

  },[search])

  const columns = [
    {
      name: "Genre",
      selector: (row) => row.genreName,
      sortable: true,
      width:'200px',
     style:{  fontSize:'15px'}


    },
    
    {
      name: "Code",
      selector: (row) => row.genreCode,
      width:'150px',
      style:{ fontWeight:'bold' , fontSize:'16px'}

      
    },
    {
      name: "Description",
      selector: (row) => row.description,
      width:'800px',
     wrap:true,
     allowOverflow:false,
     style:{  fontSize:'14px' ,padding:'3px'}

      
    },
    // {
    //   name:"Actions",
    //   cell: row => (
    //     <button 
    //     className="bg-blue-900 p-2 hover:bg-blue-800 text-white rounded"
    //     >Edit</button>
    //   )
    // }problem with layout
  ];

  return (
    <>
       {!isLoasing ?
          <DataTable
            title="Genre Catalogue"
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
  );
}

export default ShowGenre;
