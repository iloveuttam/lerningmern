import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

export const pastesSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
  },
  reducers: {
    addToPastes: (state,action) => {
      //if the title is already registered you may give the warning
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("ho gya aram se");   
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex( (item) =>
       item._id === paste._id);
      if(index>=0){
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("kitni bar ek me hi update karega");
      }
    },
    resetAllPastes: (state, action) => {
       state.pastes=[];
    },
    removeFromPastes:(state,action)=>{
       const pasetId = action.payload;
       console.log(pasetId);
       const index = state.pastes.findIndex((item)=> item._id === pasetId);
       if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes" ,JSON.stringify(state.pastes));
        toast.success("paste deleted");
       }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pastesSlice.actions

export default pastesSlice.reducer