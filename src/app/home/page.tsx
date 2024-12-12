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

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function HomePage() {
  const [data, setData] = useState<{ value: number; label?: string }[]>([]);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="w-full  p-12">
      <Card className="w-full h-full bg-gradient-to-br from-[#202020] via-[#272727] to-[#171817] border-b-0 border-x-0 border-t border-t-white/30 shadow-[0_20px_50px_rgba(255,_255,_255,_0.3)] backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-100">
            Card Title
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/2 text-center">
              <p className="text-gray-300">Content goes here</p>
              <div className="w-full h-64"></div>
            </div>
            <div className="w-1/2 text-center flex items-center justify-center">
              <Image
                src="/images/machines.png"
                alt="Machines"
                width={500}
                height={250}
                className="rounded-lg opacity-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[500px]"
      >
        <PieChart width={500} height={500}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={120}
            strokeWidth={5}
          >
            <Label
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
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
