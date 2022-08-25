import React, { useState } from 'react'
import ModalSettings from './ModalSettings';

const Settings = () => {
    const [active, setActive] = useState(false);

  return (
    <>
        <ModalSettings setActive={setActive} active={active} />
        <button className='bg-slate-100 px-4 py-3 rounded-xl font-medium' onClick={() => setActive(true)}>⚙ Settings</button>
    </>
  )
}

export default Settings