import './App.css'
import Navbar from './components/Navbar';
import VillageHeroSection from './components/Componentone.tsx';
import VillageDevelopmentMetrics from './components/Progress.tsx'
import VillageSocialFeed from './components/VillageSocialFeed.tsx'
import VillageFooter from './components/VillageFooter.tsx'
function App() {

	return (
		<>
			<Navbar />
			<VillageHeroSection />
			<VillageDevelopmentMetrics />
			<VillageSocialFeed />
			<VillageFooter />
		</>
	)
}

export default App
