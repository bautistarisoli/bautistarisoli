import profilePhoto from "@/assets/profile-photo.jpg";
import { Card } from "@/components/ui/card";
import { getYears } from "@/utils/getYears";
import { Mail, Phone, MapPin } from "lucide-react";

export const CVHeader = () => {
  return (
    <Card className="bg-cv-sidebar text-cv-sidebar-foreground p-8 rounded-none">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Bautista Risoli"
            className="w-32 h-32 rounded-full object-cover border-4 border-cv-accent shadow-lg"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Bautista Risoli</h1>
          <p className="text-cv-sidebar-foreground/80 text-lg">Técnico en Comercialización</p>
          <p className="text-cv-sidebar-foreground/70">{getYears()} años</p>
        </div>

        <div className="space-y-3 w-full">
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-4 h-4 text-cv-accent" />
            <span>+54 223 537-9717</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-4 h-4 text-cv-accent" />
            <span>bautistarisoli@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="w-4 h-4 text-cv-accent" />
            <span>España 3081, Mar del Plata</span>
          </div>
        </div>
      </div>
    </Card>
  );
};