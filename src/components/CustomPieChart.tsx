"use client";

import * as React from "react";
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface CustomPieChartProps {
  variant?: "default" | "themed";
}

const chartDataOG = [
  { name: "ChatGPT", value: 320, fill: "#10A37F" },
  { name: "DALL-E", value: 245, fill: "#FF6F61" },
  { name: "Stable Diffusion", value: 180, fill: "#6C63FF" },
  { name: "MidJourney", value: 210, fill: "#F4A261" },
  { name: "Hugging Face", value: 190, fill: "#FFCA28" },
];

const themedChartData = [
  { name: "ChatGPT", value: 320, fill: "#008080" },
  { name: "DALL-E", value: 245, fill: "#006666" },
  { name: "Stable Diffusion", value: 180, fill: "#CCCCCC" },
  { name: "MidJourney", value: 210, fill: "#888888" },
  { name: "Hugging Face", value: 190, fill: "#555555" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
        <p className="text-white font-medium">{payload[0].name}</p>
        <p className="text-gray-300">
          {payload[0].value.toLocaleString()} users
        </p>
      </div>
    );
  }
  return null;
};

export function CustomPieChart({ variant = "default" }: CustomPieChartProps) {
  const chartData = variant === "themed" ? themedChartData : chartDataOG;
  const totalUsers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <PieChart width={360} height={360}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={140}
          paddingAngle={2}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
          <Label
            content={({ viewBox }) => {
              return (
                <g>
                  <text
                    x={10}
                    y={10}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-white text-2xl font-bold"
                  >
                    {totalUsers.toLocaleString()}
                  </text>
                  <text
                    x={10}
                    y={10 + 25}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-gray-400 text-sm"
                  >
                    Total Users
                  </text>
                </g>
              );
            }}
          />
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
}

export default CustomPieChart;
