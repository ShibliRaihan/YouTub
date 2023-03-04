import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <>
      <Paper
        component={"form"}
        onSubmit={handelSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          ma: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={""}
          onChange={() => {}}
        />
        <IconButton type={"submit"} sx={{ p: "10px", color: "red" }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
