import { Carousel } from "../../components/Carousel";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Category, categories, FilterCategory } from "../../components/Category";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

function Home() {
  
  return (
    <>
      <Header />
      <Banner image="pexels-tima-miroshnichenko-7991486.jpg" />
      <Container>

        {categories.map((category, index) =>

          <Category category={category}>
            <Carousel>
              {FilterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
            </Carousel>
          </Category>)}

      </Container>
      <Footer />
    </>
  );
}

export default Home;
