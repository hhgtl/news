import {Header} from "@/widgets";
import {NavTabs} from "@/features/nav-tabs/ui/nav-tabs.tsx";
import {MainHeadline} from "@/features/main-headline/ui/main-headline.tsx";
import s from './app.module.scss'

function App() {
  return (
    <div className={s.container}>
        <Header/>
        <NavTabs/>
        <MainHeadline/>
    </div>
  )
}

export default App
