import {Footer, Header} from "@/widgets";
import {MainHeadline, NavTabs} from "@/features";
import s from './app.module.scss'

function App() {
  return (
    <div className={s.container}>
        <Header/>
        <NavTabs/>
        <MainHeadline/>
        <Footer/>
    </div>
  )
}

export default App
