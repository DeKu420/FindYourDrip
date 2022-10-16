import "./userList.css";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


export default function UsertList() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(()=>{
    getUsers(dispatch);
  },[dispatch])

  // const handleDelete = (id) => {
  //   deleteProduct(id, dispatch);
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "User",
      width: 200,
    },
    
    
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },

    {
      field : "Member Since" ,
      headerName : "Created Date",
      width : 200
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              //onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
