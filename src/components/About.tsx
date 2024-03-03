import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Project
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                In a world inundated with generic educational content, our
                project stands out as a beacon of tailored learning experiences.
                By leveraging advanced technologies like Federated Learning, we
                ensure that every user receives recommendations curated just for
                them. No more sifting through irrelevant courses or struggling
                with concepts that don't resonate – our platform understands
                your unique needs and guides you towards success.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
