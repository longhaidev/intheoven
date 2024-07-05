import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import _ from "lodash";
// cpn
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import FoodSection from "../../components/FoodSection/FoodSection";
import OurStory from "../../components/OurStory/OurStory";
import NewLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../shared/Footer/Footer";
// fake data
import categories from "../../assets/FakeData/categories.json";
const Home = () => {
  const [bakeryGroup, setBakeryGroup] = useState([]);
  const [beverageGroup, setBeverageGroup] = useState([]);

  const separateCategoryGroup = () => {
    let bakeryGroup = [];
    let beverageGroup = [];
    let raw = _.chain(categories)
      .groupBy("category_group")
      .map((item) => {
        item.forEach((product) => {
          if (product.category_group === "bakery") {
            bakeryGroup.push(product);
          } else {
            beverageGroup.push(product);
          }
        });
        setBakeryGroup(bakeryGroup);
        setBeverageGroup(beverageGroup);
      })
      .value();
  };
  useEffect(() => {
    separateCategoryGroup();
  }, []);
  return (
    <>
      <Banner></Banner>
      <FoodSection
        data={bakeryGroup}
        title={"Bakery"}
        subtitle={
          "We’ve got you covered for any holiday, special occasion, or cause for celebration."
        }
        bgColor={""}
      ></FoodSection>
      <FoodSection
        data={beverageGroup}
        title={"Beverages"}
        subtitle={
          "We’ve got you covered for any holiday, special occasion, or cause for celebration."
        }
        bgColor={"#f1dab2"}
      ></FoodSection>
      <OurStory
        storyImg={
          "https://breadtalkvietnam.com/wp-content/uploads/2023/06/BreadTalk-Studio_14-min-min.jpg"
        }
      ></OurStory>
    </>
  );
};

export default Home;
