import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect( () =>{
      if(pasteId){
          const paste = allPastes.find( (p) =>p._id === pasteId);
          setTitle(paste.title);
          setValue(paste.content);
          
      }
  },[pasteId]) 

  function createPaste(){
    const paste ={
        title:title,
        content:value,
        _id: pasteId ||
             Date.now().toString(36),
             createdAt:new Date().toISOString(),
    }
    
    
    if(pasteId){
        //update
        dispatch(updateToPastes(paste));
    }
    else{
        //create
        dispatch(addToPastes(paste));
    }
    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }


  return (
    <div>
      <div className=" relative place-items-center">
        <div className="relative place-items-center"> 
             <input
          className="mt-8 border-2 border-amber-300 rounded-2xl text-center bg-amber-50 h-10 w-40 ml-2.5"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="border-2 border-amber-300 rounded-2xl bg-amber-50 text-gray-500 h-10 w-40 ml-38" 
        onClick={createPaste}
        >{pasteId?"Update paste" : "Create my Paste"}</button>

        </div>
        <div>
          <textarea
            className="bg-gray-400 border-2 border-amber-300 w-[500px]
          rounded-2xl mt-2 mt-6"
            value={value}
            placeholder="enter content here"
            onChange={(e) => setValue(e.target.value)}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
