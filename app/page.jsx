import { Footer, Navbar } from '../components/exports';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections/exports';

export default function IndexPage() { return (
  <div className="bg-DarkGunmetal overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);}


