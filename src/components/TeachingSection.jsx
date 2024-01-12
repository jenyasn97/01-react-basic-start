import WayToTeache from "./WayToTeache";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <>
      <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {ways.map((way) => {
            return (
              <WayToTeache
                key={way.key}
                title={way.title}
                description={way.description}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}
