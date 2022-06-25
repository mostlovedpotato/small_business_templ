import React from 'react'

const GreenBtn = ({title,onClick,className}) => {
  return (
    <button onClick={onClick} className={"bg-lightColor text-white bg-gradient-to-r from-green-100 to-green-500 hover:bg-transparent hover:scale-110 duration-200 rounded-md ease-out " +className}>
        {title}
    </button>
  )
}

export default GreenBtn