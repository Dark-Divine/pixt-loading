
import LoadingComponent from "../../components/loading"
import MusicPlayerComponent from "../../components/musicPlayer"
import TabsComponent from "../../components/tabs"

export default function Main() {
  return (
    <div className="w-screen h-screen relative">
      <img src="images/background-1.jpg" className="absolute inset-0 object-cover object-center" />
      <div className="absolute inset-0 background-cover"></div>
      <div className="z-20 absolute top-10 left-10 text-white">
        <div className="w-14 h-14 rounded-xl border glass-morphism font-bold border-white/10 flex items-center justify-center">TS</div>
      </div>
      <TabsComponent />
      <LoadingComponent />
      <MusicPlayerComponent />
    </div>
  )
}