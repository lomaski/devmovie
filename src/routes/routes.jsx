import { Routes as RouterRoutes, Route } from "react-router-dom";
import Filmes from "../containers/Filmes";
import Home from "../containers/Home";
import Series from "../containers/Series";
import Detail from "../containers/Detail";
import People from "../containers/People";
import DefaultLayout from "../layout/DefaultLayout";


export default function Routes() {
  return (
    <RouterRoutes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/pessoas/:id" element={<People />} />
        <Route path="/tv/:id" element={<Detail />} />
      </Route>
    </RouterRoutes>
  );
}
