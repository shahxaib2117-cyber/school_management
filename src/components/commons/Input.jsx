// import React from 'react'

// const Input = (props) => {
//     const { type = "text", placeholder = "", value = "", name = "", onChange, className = "" } = props;
//   return (
//     <input
//      type={type ? type :"text"} 
//      placeholder={placeholder? placeholder : ""}
//      value={value ? value :''}
//      name={name? name : ''}
//      onChange={onChange || (() => {})}
//      className={className? className : ''}
//       />
//   )
// }

// export default Input

import React from 'react'

const Input = ({className='', type='text', ...rest}) => {
  return (
    <input className={className} type={type} {...rest} />
  )
}

export default Input