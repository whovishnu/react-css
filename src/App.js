import { loremIpsum } from "react-lorem-ipsum";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Card
          header={"Helping companies build better, scalable software"}
          headerClassName={"heading1"}
          discriptions={loremIpsum({
            avgSentencesPerParagraph: 6,
            avgWordsPerSentence: 5
          })}
        />
      </section>
      <section className="f-col">
        <Card
          image
          header={"Spense.com ->"}
          headerClassName={"heading2"}
          discriptions={loremIpsum({
            avgSentencesPerParagraph: 8,
            avgWordsPerSentence: 5
          })}
        />
        <Card
          image
          header={"YelpCamp.com ->"}
          headerClassName={"heading2"}
          discriptions={loremIpsum({
            avgSentencesPerParagraph: 8,
            avgWordsPerSentence: 5
          })}
        />
      </section>
      <section className="main-old f-col">
        <Card
          header={"A co-founder at one of the world's largest compmunities."}
          headerClassName={"heading2"}
          discriptions={loremIpsum({
            avgSentencesPerParagraph: 10,
            avgWordsPerSentence: 8
          })}
        />
        <Card
          discriptions={loremIpsum({
            avgSentencesPerParagraph: 12,
            avgWordsPerSentence: 8
          })}
        />
      </section>
      <Footer />
    </div>
  );
}
