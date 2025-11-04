import {Header} from "@/widgets";
import {NavTabs} from "@/features/nav-tabs/ui/nav-tabs.tsx";
import s from './app.module.scss'

function App() {
  return (
    <div className={s.container}>
        <Header/>
        <NavTabs/>
    </div>
  )
}

export default App
