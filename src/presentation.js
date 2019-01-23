// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Typescript / Flow
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            BAM doit typer son code 🚀
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Pourquoi ?
          </Heading>
          <Heading size={6} textColor="primary">
            Avoir moins de bugs
          </Heading>
          <Heading size={6} textColor="primary">
            Coder plus vite
          </Heading>
          <Heading size={6} textColor="primary">
            Etre heureux
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Moins de bug
          </Heading>
          <Image src="https://adriancolyer.files.wordpress.com/2017/09/js-typing-fig-5.jpeg?w=480&zoom=2" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            A propos des bugs
          </Heading>
          <List>
            <ListItem>Intresequement c'est les même bugs détéctés</ListItem>
            <ListItem>Différence notable: selon la qualité du typage (DefinitelyTyped ou FlowTypes)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Comment typer une lib ?
          </Heading>
          <List>
            <ListItem>La lib est en typescript, j’utilise la partie TS de la lib</ListItem>
            <ListItem>La lib est en JS, j’utilise l’interface (.d.ts ou flow) du package</ListItem>
            <ListItem>La lib est typée sur definitely typed/flow typed </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Typage des libs de BAM
          </Heading>
          <Heading size={5} bgColor="primary">
            React et React-Native
          </Heading>
          <List>
            <ListItem>parfaitement typée en Flow</ListItem>
            <ListItem>Très actif sur deftype (maj React jeudi 16, RN il y a un mois) </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Typage des libs de BAM
          </Heading>
          <Heading size={5} bgColor="primary">
            React-navigation, redux, jest, react-animatable, Styled-component, Sentry, Firebase, Algolia, TypeORM, RN Vector icons
          </Heading>
          <List>
            <ListItem>Toutes sont typées en TS (1 est en TS, 4 maintiennent l'interface dans le repo, 5 existent sur deftype et updated il y a au moins 3 mois)</ListItem>
            <ListItem>Dernière version de StyledComponent pas typée en flow</ListItem>
            <ListItem>En terme de contributeurs: 10 fois plus de stars/commit/contributeur sur deftype</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            Ce que les dev en pensent
          </Heading>
          <Image src="jsstateoftheart.png" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            Ce que BAM en pense
          </Heading>
          <Heading size={5} bgColor="primary">
            Sur 28 dev
          </Heading>
          <List>
            <ListItem>1 dev n'a jamais typé</ListItem>
            <ListItem>27 (donc le reste) ont fait du flow</ListItem>
            <ListItem>17 ont fait les deux (tout les sondés qui ont répondu sur TS connaissais flow)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            Ce que BAM en pense
          </Heading>
          <Heading size={5} bgColor="primary">
            Entre 0 et 5, comment tu notes ton experience avec flow/TS
          </Heading>
          <List>
            <ListItem>Moyenne de flow = 3,07</ListItem>
            <ListItem>Moyenne de TS = 3,68</ListItem>
            <ListItem>Voir les résultats du form</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            J'en ai jamais fait
          </Heading>
          <List>
            <ListItem>https://github.com/bamlab/typescript-patterns</ListItem>
            <ListItem>Dojo NestJS première partie</ListItem>
            <ListItem>Yann, GuillaumeDM, Sammy</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
