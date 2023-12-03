import axios from "axios";
import { Checkbox, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

export default function Home() {
  const url = 'https://arsh-admin-dashboard.vercel.app/';
  const router = useRouter();
  const [fetchdata, setfetchdata] = useState([]);
  const [totalpage, settotalpage] = useState(0);
  const [editableItem, setEditableItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${url}api/backend/search?page=1&term=${searchTerm}`);
      setfetchdata(response.data.data);
      settotalpage(response.data.totalpages);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchDataAndPage = async () => {
      try {
        const response = await axios.get(`${url}api/backend/?page=1`);
        setfetchdata(response.data.data);
        settotalpage(response.data.totalpages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndPage();
  }, []);

  const changepage = (Page_id) => {
    axios.get(`${url}api/backend/?page=${Page_id}`).then((nextdata) => {
      setfetchdata(() => nextdata.data.data);
      settotalpage(() => nextdata.data.totalpages);
      updateURL(Page_id);
    });
  };

  const updateURL = (page) => {
    const newUrl = `${window.location.pathname}?page=${page}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  const HandleDelete = (id) => {
    let { page } = router.query;
    if (page === undefined) {
      page = "1";
    }
    axios.delete(`${url}api/backend/?page=${page}&id=${id}`).then((fetchUpdatedData) => {
      setfetchdata(() => fetchUpdatedData.data.data);
      settotalpage(() => fetchUpdatedData.data.totalpages);
    });
  };

  const handleEditClick = (item) => {
    setEditableItem(item);
  };

  const handleCancelEdit = () => {
    setEditableItem(null);
  };

  const handleSaveEdit = (id) => {
    let { page } = router.query;
    if (page === undefined) {
      page = "1";
    }
    axios.put(`${url}api/backend/?page=${page}&id=${id}`, editableItem).then((fetchUpdatedData) => {
      setfetchdata(() => fetchUpdatedData.data.data);
      settotalpage(() => fetchUpdatedData.data.totalpages);
      setEditableItem(null);
    });
  };

  const handleCheckboxChange = (id) => {
   
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    let { page } = router.query;
    if (page === undefined) {
      page = "1";
    }
    axios.delete(`${url}api/backend/?page=${page}`, {
      params: { ids: selectedItems.join(',') }
    }).then((fetchUpdatedData) => {
      setfetchdata(() => fetchUpdatedData.data.data);
      settotalpage(() => fetchUpdatedData.data.totalpages);
      setSelectedItems([]); 
    });
  };

  return (
    <div>
      <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchInputChange}
        style={{ marginBottom: '16px', width: '70%' }}
        
      />
       <Button
        
        variant="contained"
        value={searchTerm}
        
        style={{ marginLeft:"10px",height: '46px', width: '10%' }}
        
      >
        Search
      </Button>
      
      </div>
     
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid gray",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>
              <Checkbox disabled onClick={() => {}} />
            </th>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Role</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetchdata.map((value) => (
            <tr key={value.id} style={{ borderBottom: "1px solid gray" }}>
              <td style={{ padding: "10px" }}>
                <Checkbox
                  checked={selectedItems.includes(value.id)}
                  onChange={() => handleCheckboxChange(value.id)}
                />
              </td>
              <td style={{ padding: "10px" }}>
                {editableItem && editableItem.id === value.id ? (
                  <TextField
                    value={editableItem.name}
                    onChange={(e) => setEditableItem({ ...editableItem, name: e.target.value })}
                  />
                ) : (
                  value.name
                )}
              </td>
              <td style={{ padding: "10px" }}>
                {editableItem && editableItem.id === value.id ? (
                  <TextField
                    value={editableItem.email}
                    onChange={(e) => setEditableItem({ ...editableItem, email: e.target.value })}
                  />
                ) : (
                  value.email
                )}
              </td>
              <td style={{ padding: "10px" }}>
                {editableItem && editableItem.id === value.id ? (
                  <TextField
                    value={editableItem.role}
                    onChange={(e) => setEditableItem({ ...editableItem, role: e.target.value })}
                  />
                ) : (
                  value.role
                )}
              </td>
              <td>
                {editableItem && editableItem.id === value.id ? (
                  <>
                    <Button variant="outlined" onClick={() => handleSaveEdit(value.id)}>
                      Save
                    </Button>
                    <Button variant="outlined" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="outlined" onClick={() => handleEditClick(value)}>
                    Edit
                  </Button>
                )}
                <Button variant="outlined" color="error" onClick={() => HandleDelete(value.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="contained" color="error" onClick={handleDeleteSelected}>
        Delete Selected
      </Button>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2%",alignItems:"center" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={()=>{
          changepage(1);
        }}
        style={{marginBottom: '8px', marginLeft: '8px' }}
      >
        {'<<'}
      </Button>
        {Array.from({ length: Math.min(totalpage, 5) }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => changepage(index + 1)}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: "lightgray",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </Button>
        ))}
        <Button
        variant="outlined"
        color="primary"
        onClick={()=>{
          changepage(totalpage)
        }}
        style={{marginBottom: '8px', marginLeft: '8px' }}
      >
        {'>>'}
      </Button>
      </div>
    </div>
  );
}
