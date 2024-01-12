import { useState } from "react";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import TabSection from "./components/TabsSection";
import TeachingSection from "./components/TeachingSection";
import IntroSection from "./components/introSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectsAction";

function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            {" "}
            <TeachingSection />
            <TabButton />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
