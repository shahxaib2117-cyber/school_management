import React, { useContext, useState } from 'react'
import Input from '../components/commons/Input'
import LoginBtnContext from '../LoginContext'
import { Links, NavLink, Route } from 'react-router-dom'
import FirstStep from '../components/loginSteps/FirstStep'
import Steps from '../components/commons/Steps'
import SecondStep from '../components/loginSteps/SecondStep'
import ThirdStep from '../components/loginSteps/ThirdStep'
import LastStep from '../components/loginSteps/LastStep'
import '/src/components/loginSteps/loginsteps.css'

const Login = () => {

    const [count, setCount] = useState(0)

    const increase = () => {
        {
            setCount(count + 1)
        }
    }

    return (
        <>
            {count === 0 && <><FirstStep increase={increase} /> <Steps steps={count} /> </>}
            {count === 1 && <><SecondStep increase={increase} /> <Steps steps={count} /> </>}
            {count === 2 && <><ThirdStep increase={increase} /> <Steps steps={count} /> </>}
            {count === 3 && <><LastStep increase={increase} /> <Steps steps={count} /> </>}
        </>
    )
}

export default Login
