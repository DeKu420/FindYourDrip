import "./userList.css";
import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import { Container } from "@material-ui/core";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
      } catch  {} 
    };
    getUsers();
  },[]);
  // const handleDelete = (id) => {
  //   setUsers(users.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
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
              //onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container  sx={{height: 350}}>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={100}
        checkboxSelection
        autoHeight
        columnVisibilityModel
      />
    </Container>
  );
}
