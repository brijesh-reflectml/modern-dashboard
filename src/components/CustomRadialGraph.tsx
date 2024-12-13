"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

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

interface CustomRadialGraphProps {
  variant?: "default" | "themed";
}

const chartDataOG = [
  { tool: "ChatGPT", users: 320, fill: "#10A37F" },
  { tool: "DALL-E", users: 245, fill: "#FF6F61" },
  { tool: "Stable Diffusion", users: 180, fill: "#6C63FF" },
  { tool: "MidJourney", users: 210, fill: "#F4A261" },
  { tool: "Hugging Face", users: 190, fill: "#FFCA28" },
];

const themedChartData = [
  { tool: "ChatGPT", users: 320, fill: "#008080" }, // Teal
  { tool: "DALL-E", users: 245, fill: "#006666" }, // Darker Teal
  { tool: "Stable Diffusion", users: 180, fill: "#CCCCCC" }, // Light Grey
  { tool: "MidJourney", users: 210, fill: "#888888" }, // Medium Grey
  { tool: "Hugging Face", users: 190, fill: "#555555" }, // Dark Grey
];

export function CustomRadialGraph({
  variant = "default",
}: CustomRadialGraphProps) {
  const chartData = variant === "themed" ? themedChartData : chartDataOG;

  const chartConfig = {
    users: {
      label: "Users",
    },
    chatgpt: {
      label: "ChatGPT",
      color: "hsl(var(--chart-1))",
    },
    dalle: {
      label: "DALL·E",
      color: "hsl(var(--chart-2))",
    },
    stableDiffusion: {
      label: "Stable Diffusion",
      color: "hsl(var(--chart-3))",
    },
    midJourney: {
      label: "MidJourney",
      color: "hsl(var(--chart-4))",
    },
    huggingFace: {
      label: "Hugging Face",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col" variant="ghost">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="users" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
