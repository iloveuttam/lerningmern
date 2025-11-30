import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { toast } from "react-toastify";
import { NavLink,Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(paseteId) {
    dispatch(removeFromPastes(paseteId));
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    toast.success("coppies!");
  }

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator.share({
        text: paste.content,
        // ← title goes inside "text"
      });
    } else {
      alert("Share not supported — title copied instead!");
      navigator.clipboard.writeText(paste.title);
    }
  };

  return (
    <div>
      <div
        className="flex
       justify-center mt-5"
      >
        <input
          type="search"
          className="bg-amber-50 border-2 border-amber-500 rounded-3xl h-10 justify-center items-center w-[600px] relative place-items-center p-3"
          placeholder="search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className=" border ">
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <Link to={`/?pasteId=${paste._id}`}>
                    <button>Edit</button>
                  </Link>
                  <button>
                    <NavLink to={`/pastes/${paste._id}`}>View</NavLink>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button onClick={() => handleCopy(paste.content)}>
                    Copy
                  </button>
                  <button onClick={() => handleShare(paste)}>Share</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
