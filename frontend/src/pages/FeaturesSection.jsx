import { BookOpen, Video, Users, Award, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "Access a wide range of dental courses from basic to advanced levels, covering all specializations.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Learn through high-quality video content with step-by-step demonstrations from experts.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from practicing dental professionals with years of clinical experience.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certifications upon course completion to advance your career.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Flexible learning schedules that fit your busy professional life.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data and progress are protected with enterprise-grade security.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Everything You Need to Excel in Dentistry
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our platform provides comprehensive tools and resources designed specifically 
            for dental professionals looking to enhance their skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
