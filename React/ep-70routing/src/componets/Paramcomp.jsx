import React from 'react'
import { useParams } from 'react-router-dom'

const Paramcomp = () => {
     const {id} = useParams();
  return (
    <div>
        Param: {id};
    </div>
  )
}

export default Paramcomp
