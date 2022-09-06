import React, { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import Slider from "./slider";
import { GET_PROGRAMS } from "../api/program";

const Home = (): ReactElement => {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) {
    return <p>Chargement...</p>;
  }
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>Un titre ?</h1>
      <Slider programs={data.program} />
    </div>
  );
};

export default Home;
