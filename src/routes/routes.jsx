import { Routes as RouterRoutes, Route } from "react-router-dom";
import Filmes from "../containers/Filmes";
import Home from "../containers/Home";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";


export default function Routes() {
  return (
    <RouterRoutes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </RouterRoutes>
  );
}
