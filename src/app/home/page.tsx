"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import CustomPieChart from "@/components/CustomPieChart";
import { CustomBarGraph } from "@/components/CustomBarGraph";
import { CustomRadialGraph } from "@/components/CustomRadialGraph";
import { CustomLineChartInteractive } from "@/components/CustomLCI";

export default function HomePage() {
  const [pieChartVariant, setPieChartVariant] = useState<"default" | "themed">("default");

  const onSwitchChanged = (event: boolean) => {
    setPieChartVariant(event ? "themed" : "default");
  };

  return (
    <div className="w-full p-6 lg:p-12 space-y-6">
      {/* Header Card */}
      <Card variant="gradient" className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-6">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-white">Yearly Reports</h1>
                <p className="text-gray-400 mt-1">2023-24</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Theme Toggle</span>
                <Switch onCheckedChange={onSwitchChanged} />
              </div>
            </div>

            {/* First Section - Pie Chart */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-200">Datasets Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  The dataset represents the number of users (in thousands) engaging with popular AI tools 
                  and software. The tools range from conversational AI to generative visual content and 
                  collaborative machine learning platforms.
                </p>
              </div>
              <div className="flex justify-center h-[360px]">
                <CustomPieChart variant={pieChartVariant} />
              </div>
            </div>

            <Separator className="my-6" />

            {/* Second Section - Bar Graph */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <CustomBarGraph variant={pieChartVariant} />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-xl font-medium text-gray-200">Key Observations</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="block w-2 h-2 mt-2 rounded-full bg-[#10A37F]" />
                    <span>ChatGPT dominates in user engagement across industries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-2 h-2 mt-2 rounded-full bg-[#FF6F61]" />
                    <span>DALL·E and MidJourney show growing interest in generative AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-2 h-2 mt-2 rounded-full bg-[#6C63FF]" />
                    <span>Hugging Face maintains relevance in the tech ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-2 h-2 mt-2 rounded-full bg-[#F4A261]" />
                    <span>Stable Diffusion remains popular for professional use</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Third Section - Radial Graph */}
            <div className="space-y-6">
              <CustomRadialGraph variant={pieChartVariant} />
            </div>

            <Separator className="my-6" />

            {/* Fourth Section - Line Chart */}
            <div className="space-y-6">
              <CustomLineChartInteractive />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
