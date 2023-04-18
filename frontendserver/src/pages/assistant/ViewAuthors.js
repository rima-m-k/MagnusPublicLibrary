
import React, { useEffect, useState } from 'react'
import AsstNavigationBar from '../../components/AsstNavigationBar';
import { getAuthorData } from '../../services/adminServiceHelpers';
import DataTable from 'react-data-table-component';

function ViewAuthors() { 
  
    
  const [authorData, setAuthorData] = useState([]);
  const [error, setError] = useState("");

  const [search,setSearch] = useState("")
  const [filteredData,setFilteredData] = useState([])

  useEffect(() => {
    getAuthorData()
    .then((res) => {
      console.log(res);
      setAuthorData(res.data);
      setFilteredData(res.data)
    })
    .catch((err) => {
      console.log(err);
      setError(err.response);
    });
}, []);
console.log(error)
useEffect(() => {
const result = authorData.filter(author => author.AuthorName.toLowerCase().match(search.toLowerCase()))
setFilteredData(result)
},[search])
// 
const columns = [
  {
    name: "Name",
    selector: (row) => `${row.AuthorName}`,
   wrap:true,

    sortable: true,
    width:'200px',
    style:{  fontSize:'16px'}
  },
  
  {
    name: "Code",
    selector: (row) => row.AuthorCode,
    width:'150px',
    style:{  fontSize:'15px'}

  },

  {
    name: "Birth/Death",
    selector: (row) => `${row.DateOfBirth} - ${row.DateOfDeath}`,
   wrap:true,

    sortable: true,
    width:'150px',
    style:{  fontSize:'16px'}
  },
  {
    name: "Nationality",
    selector: (row) => row.Nationality,
    sortable: true,
    wrap:true,
    width:'200px',
   style:{  fontSize:'15px'}


  },
  {
    name: "Biography",
    selector: (row) => row.Biography,
    width:'700px',
   wrap:true,
   allowOverflow:false,
   style:{  fontSize:'14px' ,padding:'3px'}

    
  },
  {
    name:"Actions",
    cell: row => (
      <button 
      className="bg-blue-900 p-2 hover:bg-blue-800 text-white rounded"
      >Edit</button>
    )
  }
];
  return (
    <>
    <AsstNavigationBar />

          {/* <h2 className="text-lg font-medium leading-6 text-gray-900">Author List</h2> */}
          <div className="mt-4 overflow-x-auto">
           
          <DataTable
            title="Author Catalogue"
            columns={columns}
            data={filteredData}
            pagination
            fixedHeader
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
              // expandableRows
              // expandableRowsComponent={ExpandedComponent}
              // subHeaderAlign="left"
              // striped
              // dense  
              // selectableRows
              // selectableRowsHighlight
              // noContextMenu ={true}
              // noTableHead={true}
              // fixedHeaderScrollHeight='450px'
          />



</div>
       
     
    </>
  );
}

export default ViewAuthors
