import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  
  {
    title: "Camarero",
    company: "Santa, Restaurante", 
    period: "Temp 2021/22",
    year: "2021",
    description: "Atención al cliente"
  },
  {
    title: "Coordinador de Juego",
    company: "Ready, Laser Tag",
    period: "Temp 2022/23",
    year: "2022",
    description: "Coordinación de actividades"
  },
  {
    title: "Encargado y Cajero",
    company: "La Diva, Almacén",
    period: "Mar-Dic 2023",
    year: "2023", 
    description: "Gestión integral del establecimiento"
  },
  {
    title: "Cajero Principal", 
    company: "Santa, Restaurante",
    period: "Temp 2024/25",
    year: "2024",
    description: "Responsable principal de caja"
  },
  {
    title: "Cajero y Vendedor",
    company: "Santa, Kiosco",
    period: "Abr-Ago 2025",
    year: "2025",
    description: "Atención al cliente y manejo de caja"
  },
  {
    title: "Encargado", 
    company: "Santa, Restaurante",
    period: "Temp 2025/26",
    year: "2025",
    description: "Responsable de coordinar y supervisar"
  },
];

export const ExperienceTimeline = () => {
  return (
    <Card className="bg-cv-content border-border/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center space-x-3 mb-4">
        <Briefcase className="w-5 h-5 text-cv-accent" />
        <h3 className="text-lg font-semibold text-cv-content-foreground">Experiencia Laboral</h3>
      </div>
      
      <div className="relative flex-1 flex flex-col md:overflow-hidden overflow-x-auto">
        {/* Timeline line - positioned between years and circles */}
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-cv-accent/20 via-cv-accent to-cv-accent/20 md:block hidden"></div>
        
        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex justify-between items-start space-x-2">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center flex-1 group">
              {/* Year - positioned above the timeline line */}
              <div className="mb-3 text-xs font-bold text-cv-accent bg-cv-accent-light px-2 py-1 rounded-full">
                {exp.year}
              </div>
              
              {/* Timeline dot */}
              <div className="relative z-10 w-3 h-3 bg-cv-accent rounded-full shadow-lg group-hover:scale-125 transition-transform duration-200 border-2 border-cv-content">
                <div className="absolute inset-0.5 bg-cv-content rounded-full"></div>
              </div>
              
              {/* Experience card */}
              <div className="mt-3 p-2 bg-cv-sidebar/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-cv-accent/10 w-full">
                <h4 className="font-semibold text-xs text-cv-content-foreground text-center leading-tight">
                  {exp.title}
                </h4>
                <p className="text-xs text-cv-accent font-medium mt-1 text-center">
                  {exp.company}
                </p>
                <p className="text-xs text-cv-text-light mt-1 text-center">
                  {exp.period}
                </p>
                <p className="text-xs text-cv-content-foreground/70 mt-1 text-center leading-tight">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="flex md:hidden flex-col space-y-3">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-cv-sidebar/5 rounded-lg shadow-md border border-cv-accent/10">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs font-bold text-cv-accent bg-cv-accent-light px-2 py-1 rounded-full whitespace-nowrap">
                  {exp.year}
                </div>
                <div className="w-3 h-3 bg-cv-accent rounded-full shadow-lg"></div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-cv-content-foreground leading-tight">
                  {exp.title}
                </h4>
                <p className="text-sm text-cv-accent font-medium mt-1">
                  {exp.company}
                </p>
                <p className="text-xs text-cv-text-light mt-1">
                  {exp.period}
                </p>
                <p className="text-xs text-cv-content-foreground/70 mt-1 leading-tight">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};