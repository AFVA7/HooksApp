import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
// import { CounterApp } from './01-use-state/CounterApp'
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook'
// import { HooksApp } from './HooksApp.jsx'
// import { SimpleForm } from './02-useEffect/simpleForm'
// import { FormWithCustonHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-use-reducer/intro-reducer'
import { TodoApp } from './08-use-reducer/TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
