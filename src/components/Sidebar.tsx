import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  LayoutDashboard,
  Settings,
  UserCircle,
  LogOut,
  Box,
  Wrench,
  ImagePlus,
  Paintbrush,
  Type,
  LayoutGrid,
  ImageUpscaleIcon,
  BarChart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SidebarTrigger } from "./ui/sidebar";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onReportsClick?: () => void;
}

export function Sidebar({
  className,
  isOpen = true,
  onReportsClick,
}: SidebarProps) {
  return (
    <Sheet open={isOpen} modal={false} defaultOpen={true}>
      <SheetContent
        side="left"
        className={cn(
          "w-[350px] bg-gradient-to-br from-[#2E2E2E] via-[#272727] to-[#202020] border-r-[#202020]",
          className
        )}
      >
        <SheetHeader className="p-2">
          <SheetTitle>
            <Card className="mb-2 text-gray-100 rounded-lg border-0 border-t border-gray-600 bg-gradient-to-br from-[#3f3f3f] via-[#365a58] to-[#262626] shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[160px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>LOGO</CardTitle>
                  <CardDescription className="text-gray-400">
                    Subtitle
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 mt-8">
                <p className="text-gray-400 py-0 my-0">3125 credits</p>
                <div className="flex items-center justify-between text-[#31B2AA]">
                  <span>Ready to create!</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-2 px-6 bg-[#465657] hover:bg-gray-600  text-gray-100 border-gray-500 hover:text-[#31B2AA]"
                  >
                    Recharge
                  </Button>
                </div>
              </CardContent>
            </Card>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 p-2">
          <div className="space-y-1">
            <Button
              variant="default"
              className="w-full justify-start text-gray-300 "
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              My Projects
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <ImagePlus className="mr-2 h-4 w-4" />
              Image to 3D
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <Type className="mr-2 h-4 w-4" />
              Text to 3D
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <Paintbrush className="mr-2 h-4 w-4" />
              Texture AI
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <ImageUpscaleIcon className="mr-2 h-4 w-4" />
              Image AI
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <Box className="mr-2 h-4 w-4" />
              3D Library
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 "
            >
              <Wrench className="mr-2 h-4 w-4" />
              Tools
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300"
              onClick={onReportsClick}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Reports
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
