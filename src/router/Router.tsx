import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { LinePlot } from "../components/pages/LinePlot";
import { PiePlot } from "../components/pages/PiePlot";
import { BarPlot } from "../components/pages/BarPlot";
import { RadarPlot } from "../components/pages/RadarPlot";
import { BubblePlot } from "../components/pages/BubblePlot";
import { MaterialUI } from "../components/pages/MaterialUI";
import { CheckMolecules } from "../components/pages/CheckMolecules";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineplot" element={<LinePlot />} />
        <Route path="/pieplot" element={<PiePlot />} />
        <Route path="/barplot" element={<BarPlot />} />
        <Route path="/radarplot" element={<RadarPlot />} />
        <Route path="/bubbleplot" element={<BubblePlot />} />
        <Route path="/materialui" element={<MaterialUI />} />
        <Route path="/checkmolecules" element={<CheckMolecules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
