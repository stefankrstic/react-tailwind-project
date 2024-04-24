import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";

export default function App() {
    return (
        <main>
            <Navbar />
            <Home />
            <Features />
            <About />
            <Pricing />
        </main>
    );
}
