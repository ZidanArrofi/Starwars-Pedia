import React from "react";
import { Link } from "react-router-dom";

// ROUTES
import people from "../assets/people.jpeg";
import planets from "../assets/planets.jpeg";
import movies from "../assets/movies.jpeg";

// CHAKRA UI
import { Button } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Card, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react";

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        <Link
          to={"star-wars/people"}
          style={{
            margin: "0 auto",
          }}
        >
          <Button>People</Button>
        </Link>

        <Link
          to={"star-wars/planets"}
          style={{
            margin: "0 auto",
          }}
        >
          <Button>Planets</Button>
        </Link>

        <Link
          to={"star-wars/movies"}
          style={{
            margin: "0 auto",
          }}
        >
          <Button>Movies</Button>
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
