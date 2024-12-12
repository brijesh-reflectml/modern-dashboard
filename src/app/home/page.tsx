import Image from "next/image";
import { Bar } from "recharts";
import { BarChart } from "recharts";
import { useEffect, useState } from "react";
import { BarChart3Icon, LineChart } from "lucide-react";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CustomPieChart from "@/components/CustomPieChart";
import { CustomBarGraph } from "@/components/CustomBarGraph";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="w-full  p-12">
     
      <Card variant="gradient" className="mb-24">
        <CardContent className="py-6">
          <h1 className="text-2xl">Yearly Reports</h1>
          <p className="text-gray-400 mt-2">2023-24</p>
          <Separator className="my-4 " />
          <div className="flex flex-row w-full items-center">
            <div className="w-1/2  text-justify">
              <p className="text-gray-300 text-xl font-normal">
                The dataset represents the number of users (in thousands) engaging with popular AI tools and software. The tools range from conversational AI to generative visual content and collaborative machine learning platforms. Each tool's user base size indicates its popularity and relevance in various domains.
              </p>
              <h2 className="text-lg font-normal text-gray-200 mt-12 mb-4">Observations:</h2>
              <ul className="list-disc text-gray-400 text-base mt-2">
                <li className="my-2">ChatGPT dominates in user engagement, reflecting its widespread adoption across industries.</li>
                <li>DALL·E and MidJourney highlight the growing interest in generative AI for visual content.</li>
                <li className="my-2">Hugging Face's focus on collaboration and open-source AI development ensures its relevance in the tech ecosystem.</li>
                <li>Stable Diffusion, despite being slightly behind in user numbers, remains a favorite among professionals for its photorealistic image generation capabilities.</li>
              </ul>
            </div>
            <div className="w-1/2 text-center ">
              <CustomPieChart />
            </div>
          </div>
          {/* <CustomPieChart /> */}
          <CustomBarGraph variant="default"/>
        </CardContent>
      </Card>
    </div>
  );
}
