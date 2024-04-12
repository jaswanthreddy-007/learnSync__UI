import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibility",
    description:
      "Prioritizing accessibility, the EDTech platform ensures all users can easily access and engage with content and features for an inclusive learning experience.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Fostering a supportive community, the EDTech platform encourages collaboration and knowledge sharing among users, enriching the learning experience through diverse perspectives and interactions.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Designed for scalability, the EDTech platform can seamlessly accommodate growing user demands and content expansion, ensuring reliable performance and accessibility as the user base expands.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "By integrating gamification elements, the EDTech platform transforms learning into an engaging and interactive experience",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
