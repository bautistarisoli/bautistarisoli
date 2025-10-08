import profilePhoto from "@/assets/profile-photo.jpg";
import { Card } from "@/components/ui/card";
import { getYears } from "@/utils/getYears";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-cv-sidebar to-cv-sidebar/90 text-cv-sidebar-foreground shadow-xl border-0 p-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-3 md:space-y-0">
        {/* Profile Photo */}
        <div className="relative w-20 h-20">
          <img
            src={profilePhoto}
            alt="Bautista Risoli"
            className="relative w-full h-full rounded-md shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        
        {/* Main Info */}
        <div className="text-center space-y-1">
          <h1 className="text-xl md:text-2xl font-bold text-cv-sidebar-foreground">Bautista Risoli</h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-3 space-y-1 md:space-y-0 text-cv-accent text-xs md:text-sm font-semibold">
            <div className="flex items-center space-x-1">
              <GraduationCap className="w-4 h-4" />
              <span className="">Técnico en Comercialización</span>
            </div>
            <span className="hidden md:inline text-cv-sidebar-foreground/60">•</span>
            <span className="text-xs bg-cv-accent/20 px-2 py-1 rounded-full">UNMDP 2021-2024</span>
          </div>
        </div>
        
        {/* Age and Address */}
        <div className="flex space-x-4 text-xs">
            <div className="flex items-center space-x-1 text-cv-sidebar-foreground/90">
              <Calendar className="w-3 h-3 text-cv-accent" />
              <div>
                <div className="font-medium">{getYears()} años</div>
                <div className="opacity-80">01/08/2002</div>
              </div>
            </div>
          
          <div className="flex items-center space-x-1 text-cv-sidebar-foreground/90">
            <MapPin className="w-3 h-3 text-cv-accent" />
            <div>
              <div className="font-medium">Mar del Plata</div>
              <div className="opacity-80">España 3081</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};