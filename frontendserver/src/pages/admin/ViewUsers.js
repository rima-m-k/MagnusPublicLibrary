import React, { useEffect, useState } from "react";
import SideBar from "../../components/AdminSideBar";
import DataTable from "react-data-table-component";
import { getUsers } from "../../services/adminServiceHelpers";

function ViewUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [search,setSearch] = useState("")
    const [filteredData,setFilteredData] = useState([])
    useEffect(() => {
      getUsers()
        .then((res) => {
          console.log(res);
          setUsers(res.data);
          setFilteredData(res.data)
        })
        .catch((err) => {
          console.log(err);
          setError(err.response);
        });
    }, []);
    useEffect(() => {
  const result = users.filter(user => user.name.toLowerCase().match(search.toLowerCase()))
  setFilteredData(result)
  
    },[search])
  
    const columns = [
      {
        name: "Library Card Number",
        selector: (row) => row.cardNumber,
        sortable: true,
        width:'200px',
       style:{  fontSize:'15px'}
  
  
      },
      {
        name: "Photo",
        selector: (row) => row.profilePhoto,
        width:'300px',
       wrap:true,
       allowOverflow:false,
       style:{  fontSize:'14px' ,padding:'3px'}
  
        
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        width:'200px',
       style:{  fontSize:'15px'}
  
  
      },
      
      {
        name: "email",
        selector: (row) => row.email,
        width:'300px',
        style:{  fontSize:'16px'}
  
        
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
        <div className="flex h-screen bg-gray-200">
          <SideBar />
          <div className="flex-grow p-6 max-w-screen">
            
            <DataTable
              title="Users"
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
        </div>
      </>
    );
  }

export default ViewUsers
