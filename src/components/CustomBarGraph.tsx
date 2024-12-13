"use client";

import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomBarGraphProps {
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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
        <p className="text-white font-medium">{payload[0].payload.name}</p>
        <p className="text-gray-300">
          {payload[0].value.toLocaleString()} users
        </p>
      </div>
    );
  }
  return null;
};

export function CustomBarGraph({ variant = "default" }: CustomBarGraphProps) {
  const chartData = variant === "themed" ? themedChartData : chartDataOG;

  return (
    <Card className="w-full" variant="ghost">
      <CardHeader>
        <CardTitle className="text-white">Usage Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#374151' }}
            />
            <YAxis
              tick={{ fill: '#9CA3AF' }}
              axisLine={{ stroke: '#374151' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
}
