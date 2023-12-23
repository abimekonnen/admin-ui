import "./Datatable.scss"
import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "./datatableSource";
import {Link} from 'react-router-dom';
import {useState} from 'react';


const Datatable = () => {
    const [data,setData] = useState(userRows);
    const handleDelete =(id) =>{
        setData(data.filter((item) => item.id !== id))
    }

    const actionColum =[
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration:"none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id) }>Delete</div>
                    </div>
                )
            }
        }
    ];

  return (
    <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new"  className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColum)}
                initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 }, 
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
    </div>
  )
}

export default Datatable
