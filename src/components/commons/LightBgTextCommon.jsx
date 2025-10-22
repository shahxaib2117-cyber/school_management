import React from 'react'

const LightBgTextCommon = (props) => {

  let {lable, margin_top} = props

  return (
    <div className={`bg_tarnsparent_2 text-[12px] md:text-[16px] border-[1px] border-white text-yellow-600 px-3 py-[3px] rounded-[20px] `}  >
      {lable}
    </div>
  )
}

export default LightBgTextCommon