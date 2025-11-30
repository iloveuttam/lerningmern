import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  // Avoid crashing if paste is not found yet
  if (!paste) {
    return <h2 className="text-red-500 text-center mt-10">Paste not found...</h2>;
  }

  return (
    <div className="relative place-items-center">
      <div className="relative place-items-center">
        
        <input
          className="mt-8 border-2 border-amber-300 rounded-2xl text-center bg-amber-50 h-10 w-40 ml-2.5"
          type="text"
          disabled
          value={paste.title}
        />

        <button
          className="border-2 border-amber-300 rounded-2xl bg-amber-50 text-gray-500 h-10 w-40 ml-38"
          disabled
        >
          View Mode
        </button>
      </div>

      <div>
        <textarea
          className="bg-gray-400 border-2 border-amber-300 w-[500px] rounded-2xl mt-6"
          value={paste.content}
          rows={20}
          disabled
        />
      </div>
    </div>
  );
};

export default ViewPaste;


