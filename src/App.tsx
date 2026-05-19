import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import VillageHeroSection from './components/Componentone.tsx';
import VillageDevelopmentMetrics from './components/Progress.tsx'
import VillageSocialFeed from './components/VillageSocialFeed.tsx'
import VillageFooter from './components/VillageFooter.tsx'
function App() {
	const [count, setCount] = useState(0)

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
