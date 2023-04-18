import React, { useEffect, useState } from 'react'
import { getEmployeeData } from '../../services/adminServiceHelpers'
import DataTable from 'react-data-table-component'
import SideBar from '../../components/AdminSideBar'

function ViewEmployees() {
    const [Employees,setEmployees] = useState([])
    const [error,setError] = useState('')

    const [search,setSearch] = useState("")
  const [filteredData,setFilteredData] = useState([])

  
  useEffect(() => {
    getEmployeeData()
    .then((res) => {
      console.log(res);
      setEmployees(res.data);
      setFilteredData(res.data)
    })
    .catch((err) => {
      console.log(err);
      setError(err.response);
    });
}, []);
useEffect(() => {
const result = Employees.filter(employee => employee.firstName.toLowerCase().match(search.toLowerCase()))
setFilteredData(result)

},[search])

    const columns =[
        {
            name: "Name",
            selector: (row) => `${row.firstName} ${row.lastName}`,
           wrap:true,
            sortable: true,
            width:'300px',
            style:{  fontSize:'16px'}
          },
           {
            name: "Designation",
            selector: (row) => row.designationID.designation        ,
           wrap:true,
            sortable: true,
            width:'300px',
            style:{  fontSize:'16px'}
          },
          {
            name: "email",
            selector: (row) => row.email        ,
           wrap:true,
            sortable: true,
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
    ]
  return (
    <>
      <div className="flex w-screen bg-gray-200">
       <SideBar />
       
        <div className="flex-grow p-4 h-screen">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Author List</h2>
          <div className="mt-4 overflow-x-auto">
           
          <DataTable
            title="Employee Data"
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
        </div>
      </div>
    </>
  )
}

export default ViewEmployees
