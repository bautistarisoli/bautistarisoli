import { ProfileHeader } from "@/components/ProfileHeader";
import { ContactSection } from "@/components/ContactSection";
import { LanguagesAndAcademicSection } from "@/components/LanguagesAndAcademicSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

const Index = () => {
  return (
    <div className="min-h-screen md:h-screen bg-gradient-subtle p-3 md:overflow-hidden overflow-auto">
      <div className="max-w-7xl mx-auto h-full flex flex-col space-y-2">
        {/* Profile Header - Compact */}
        <div className="flex-shrink-0">
          <ProfileHeader />
        </div>
        
        {/* Experience Timeline */}
        <div className="flex-1 md:min-h-0">
          <ExperienceTimeline />
        </div>
        
        {/* Interactive Sections Grid - Bottom */}
        <div className="flex-shrink-0 md:h-[30%]">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-2 w-full mx-auto h-full">
            <ContactSection />
            <LanguagesAndAcademicSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;