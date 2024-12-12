"use client";

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

interface CustomPieChartProps {
  // Define any props if needed
}

const CustomPieChart: React.FC<CustomPieChartProps> = (props) => {
  const chartData = [
    { tool: "ChatGPT", users: 320, fill: "#10A37F" },
    { tool: "DALL-E", users: 245, fill: "#FF6F61" },
    { tool: "Stable Diffusion", users: 180, fill: "#6C63FF" },
    { tool: "MidJourney", users: 210, fill: "#F4A261" },
    { tool: "Hugging Face", users: 190, fill: "#FFCA28" }
]

const chartConfig = {
    users: {
      label: "Users (in thousands)",
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

  const [data, setData] = useState<{ value: number; label?: string }[]>([]);

  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[500px]"
    >
      <PieChart width={350} height={350}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="users"
          nameKey="browser"
          innerRadius={100}
          strokeWidth={5}
        >
          <Label
            className="text-white"
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalUsers.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground text-white"
                    >
                      Users
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default CustomPieChart;
