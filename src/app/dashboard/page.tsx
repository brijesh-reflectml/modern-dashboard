import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import DashboardHero from "./components/DashboardHero";
import ServiceCards from "@/components/ServiceCards";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#132B3E] to-[#121B22]">
      <main>
        <ParticlesBackground />
        <Navbar />
        <DashboardHero />
      </main>
      
    </div>
  );
}
