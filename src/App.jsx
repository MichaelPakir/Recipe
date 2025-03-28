import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Menu from "./pages/Menu.jsx";
import Edit from "./pages/Edit.jsx";
import Fav from "./pages/Fav.jsx";
import Add from "./pages/Add.jsx";
import Cards from "./components/Cards.jsx";
import RecipePage from "./components/RecipePage.jsx";

const App = () => {
  const [navLinks] = useState([
    { label: "Menu", path: "/" },
    { label: "Edit", path: "/edit" },
    { label: "Favorites", path: "/fav" },
    { label: "Add", path: "/add" },
  ]);

  const [foods] = useState([
    {
      id: 1,
      title: "Sinigang na Baka",
      description:
        "Simple beef, vegetable, tamarind based soup that we eat over rice! A meal in itself!",
      category: "main-course",
      image:
        "https://www.maggi.ph/sites/default/files/styles/image_744_x_419/public/srh_recipes/442ce059c4c490e1ab61cdaef9c98511.jpg?h=28121b77&itok=Orr40I8J",
      ingredients: [
        {
          id: 1,
          name: "2 tablespoons canola oil",
        },
        {
          id: 2,
          name: "1 large onion, chopped",
        },
        {
          id: 3,
          name: "2 cloves garlic, chopped",
        },
        {
          id: 4,
          name: "1 pound beef stew meat, cut into 1 inch cubes",
        },
        {
          id: 5,
          name: "1 quart water",
        },
        {
          id: 6,
          name: "2 large tomatoes, diced",
        },
        {
          id: 7,
          name: "½ pound fresh green beans, rinsed and trimmed",
        },
        {
          id: 8,
          name: "½ medium head bok choy, cut into 1 ½ inch strips",
        },
        {
          id: 9,
          name: "1 head fresh broccoli, cut into bite size pieces",
        },
        {
          id: 10,
          name: "1 (1.41 ounce) package tamarind soup base",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Heat oil in medium stock pot. Saute onion and garlic until tender. Add beef to pot, and saute until browned. Pour in water. Bring to a boil, reduce heat, and simmer 20 to 30 minutes.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Place tomatoes and green beans in pot, and continue to simmer for 10 minutes. Stir in bok choy, broccoli and tamarind soup mix. Simmer for an additional 10 minutes.",
        },
      ],
    },
    {
      id: 2,
      title: "Classic Macaroni Salad",
      description:
        "This creamy macaroni salad always gets lots of compliments. It's an easy recipe to make with macaroni pasta, celery, onion, bell pepper, carrot, and pimentos and has a pleasing tangy dressing that everyone seems to love!",
      category: "appetizers",
      image:
        "https://yummykitchentv.com/wp-content/uploads/2022/04/chicken-macaroni-salad-recipe.jpg",
      ingredients: [
        {
          id: 1,
          name: "1 cup mayonnaise (Optional)",
        },
        {
          id: 2,
          name: "¼ cup white vinegar",
        },
        {
          id: 3,
          name: "2 tablespoons Dijon mustard",
        },
        {
          id: 4,
          name: "2 teaspoons kosher salt, or more to taste",
        },
        {
          id: 5,
          name: "½ teaspoon ground black pepper",
        },
        {
          id: 6,
          name: "⅛ teaspoon cayenne pepper",
        },
        {
          id: 7,
          name: "1 tablespoon white sugar, or more to taste",
        },
        {
          id: 8,
          name: "1 cup finely diced celery",
        },
        {
          id: 9,
          name: "¾ cup diced red bell pepper",
        },
        {
          id: 10,
          name: "½ cup grated carrot",
        },
        {
          id: 11,
          name: "½ cup chopped green onions, white and light parts",
        },
        {
          id: 12,
          name: "¼ cup diced jalapeño pepper",
        },
        {
          id: 14,
          name: "¼ cup diced poblano pepper",
        },
        {
          id: 15,
          name: "1 (16 ounce) package uncooked elbow macaroni",
        },
        {
          id: 16,
          name: "1 tablespoon water (Optional)",
        },
        {
          id: 17,
          name: "1 tablespoon mayonnaise (Optional)",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Whisk mayonnaise, vinegar, Dijon, salt, black pepper, and cayenne together in a bowl until well blended. Whisk in sugar, then stir in celery, bell pepper, carrot, green onions, jalapeño pepper, and poblano pepper. Cover and refrigerate until macaroni is ready.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Bring a large pot of generously salted water to a boil. Cook macaroni in the boiling water, stirring occasionally, until tender but firm to the bite, about 8 minutes. Drain but do not rinse.",
        },
        {
          id: 3,
          title: "Step 3",
          name: "Let macaroni drain in a colander for about 5 minutes, shaking out the moisture from time to time. Pour macaroni into a large bowl; toss to separate and let cool to room temperature, 10 to 15 minutes. Macaroni should be sticky.",
        },
        {
          id: 4,
          title: "Step 4",
          name: "Pour dressing over macaroni and stir until evenly distributed. Cover and refrigerate until macaroni absorbs the dressing, at least 4 hours or overnight if possible.",
        },
        {
          id: 5,
          title: "Step 5",
          name: "Stir salad before serving. Mix water and remaining mayonnaise into salad for a fresher look.",
        },
      ],
    },
    {
      id: 3,
      title: "Pancit",
      category: "vegetarian",
      description:
        "Pancit is a Filipino dish. There are many different types of pancit, but it always features rice noodles and vegetables (and often meat, such as pork or chicken). ",
      image:
        "https://panlasangpinoy.com/wp-content/uploads/2024/11/Filipino-Pancit-Recipe-1024x681.jpg",
      ingredients: [
        {
          id: 1,
          name: "1 (12 ounce) package dried rice noodles",
        },
        {
          id: 2,
          name: "1 teaspoon vegetable oil",
        },
        {
          id: 3,
          name: "1 onion, finely diced",
        },
        {
          id: 4,
          name: "3 cloves garlic, minced",
        },
        {
          id: 5,
          name: "2 cups diced cooked chicken breast meat",
        },
        {
          id: 6,
          name: "1 small head cabbage, thinly sliced",
        },
        {
          id: 7,
          name: "4 carrot, thinly sliced",
        },
        {
          id: 8,
          name: "¼ cup soy sauce",
        },
        {
          id: 9,
          name: "2 lemons - cut into wedges, for garnish",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Gather all ingredients.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Place rice noodles in a large bowl; cover with warm water and let soften for 8 to 10 minutes. Drain and set aside.",
        },
        {
          id: 3,
          title: "Step 3",
          name: "Meanwhile, heat oil in a wok or large skillet over medium-low heat. Add onion and garlic; cook and stir until onion is tender, about 3 to 5 minutes. Stir in chicken, cabbage, carrots, and soy sauce. Cook until cabbage begins to soften.",
        },
        {
          id: 4,
          title: "Step 4",
          name: "Toss in noodles and cook, stirring constantly, until heated through.",
        },
        {
          id: 5,
          title: "Step 5",
          name: "Transfer pancit to a serving dish and garnish with lemon wedges.",
        },
      ],
    },
    {
      id: 4,
      title: "Leche Flan",
      category: "appetizers",
      description:
        "Leche flan is a rich Filipino baked custard dessert with a layer of smooth caramel. My mom always made this flan for dessert and I always loved it!",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-SquashOrzo.png",
      ingredients: [
        {
          id: 1,
          name: "1 cup sugar",
        },
        {
          id: 2,
          name: "¾ cup water",
        },
        {
          id: 3,
          name: "1 (14 ounce) can sweetened condensed milk",
        },
        {
          id: 4,
          name: "1 (12 ounce) can evaporated milk",
        },
        {
          id: 5,
          name: "12 egg yolks",
        },
        {
          id: 6,
          name: "1 tablespoon vanilla extract",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C).",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Combine sugar and water in a medium saucepan over medium-high heat. Bring to a boil without stirring to avoid the mixture crystallizing. Continue to boil, swirling the pan occasionally, until sugar syrup begins to brown, 7 to 10 minutes. Reduce the heat to medium low and watch the color.",
        },
        {
          id: 3,
          title: "Step 3",
          name: "Once the caramel is a deep brown, 2 to 3 minutes, immediately pour it into a 10-inch flan mold. Carefully tilt the mold to make sure the whole bottom surface is covered.",
        },
        {
          id: 4,
          title: "Step 4",
          name: "Combine evaporated milk, condensed milk, egg yolks, and vanilla extract in a large bowl. Stir lightly to prevent bubbles or foam from forming; strain batter.",
        },
        {
          id: 5,
          title: "Step 5",
          name: "Place a roasting pan large enough to hold the flan mold on the oven rack. Fold two 32-inch long sheets of foil lengthwise in quarters to make strips. Cross the strips and place the flan mold in the roasting pan, with the ends of the strips extending over the edges of the roasting pan. Crimp ends slightly to keep them in place.",
        },
        {
          id: 6,
          title: "Step 6",
          name: "Slowly pour the custard mixture into the caramel-lined flan mold.",
        },
        {
          id: 7,
          title: "Step 7",
          name: "Add enough hot water to the roasting pan to come halfway up the side of the mold. Cover the roasting pan with aluminum foil.",
        },
        {
          id: 8,
          title: "Step 8",
          name: "Bake in the preheated oven until firm and a knife inserted near the center comes out clean, about 1 hour. Carefully remove the roasting pan from the oven. Carefully remove the flan mold from the roasting pan using the foil strips. Let cool on a wire rack, about 1 hour. Cover and chill in the refrigerator until completely cool, at least 4 hours or overnight.",
        },
        {
          id: 9,
          title: "Step 9",
          name: "Run a paring knife around the edges of the flan. Cover the mold with a rimmed platter and carefully flip it over to release the flan from the mold for serving. Scrape any excess caramel from the mold over the flan.",
        },
      ],
    },
    {
      id: 5,
      title: "Italian Stuffed Peppers",
      category: "desserts",
      description:
        "Stuffed peppers take on an Italian feel with the help of Classico® Fresh Tomato & Basil Sauce, Italian sausage, Parmesan cheese, and Italian seasonings. It's comfort food kicked up a notch--and gluten free!",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-StffPeppers.png",
      ingredients: [
        {
          id: 1,
          name: "4 large green bell peppers, cut in half lengthwise, seeds removed",
        },
        {
          id: 2,
          name: "1 pound ground beef sirloin",
        },
        {
          id: 3,
          name: "4 ounces ground Italian sausage",
        },
        {
          id: 4,
          name: "1 cup cooked brown rice",
        },
        {
          id: 5,
          name: "1 teaspoon dried Italian seasoning",
        },
        {
          id: 6,
          name: "½ teaspoon kosher salt",
        },
        {
          id: 7,
          name: "¼ teaspoon freshly ground black pepper",
        },
        {
          id: 8,
          name: "1 clove garlic, minced",
        },
        {
          id: 9,
          name: "¼ cup freshly grated Parmesan cheese",
        },
        {
          id: 10,
          name: "1 large egg, lightly beaten",
        },
        {
          id: 11,
          name: "1 (24 ounce) jar Classico® Tomato and Basil Pasta Sauce, divided",
        },
        {
          id: 12,
          name: "2 cups shredded part-skim mozzarella cheese",
        },
        {
          id: 13,
          name: "Fresh chopped parsley",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Preheat oven to 350 degrees F (175 degrees C). Spray a roasting pan (large enough to accommodate 8 pepper halves in a single layer) with cooking spray.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Combine the ground sirloin, Italian sausage, brown rice, Italian seasonings, salt, pepper, garlic, Parmesan cheese, egg, and 1/2 cup Classico® Tomato & Basil sauce in a large bowl. Mix until combined.",
        },
        {
          id: 3,
          title: "Step 3",
          name: "Divide meat mixture evenly among the green pepper halves; press to compress slightly. Arrange halves in prepared pan. Spoon the remaining Classico® Tomato & Basil sauce onto the tops of the meat and peppers. Cover tightly with foil.",
        },
        {
          id: 4,
          title: "Step 4",
          name: "Bake until the peppers are soft and internal temperature of the meat reaches 165 degrees F, about 1 1/2 hours.",
        },
        {
          id: 5,
          title: "Step 5",
          name: "Remove from oven. Remove foil and top each pepper with shredded cheese.",
        },
        {
          id: 6,
          title: "Step 6",
          name: "Turn oven to broil. Place peppers, uncovered under the broiler. Broil until the cheese is melted and bubbly, about 5 minutes. Sprinkle with parsley.",
        },
      ],
    },
    {
      id: 6,
      title: "Tabbouleh",
      category: "appetizers",
      description:
        "We love this quinoa tabbouleh on a hot summer day. Quinoa has a much nicer taste than bulgur and it's gluten-free so everyone can enjoy this Middle Eastern salad. The longer you let the tabbouleh sit, the better it tastes.",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-Tabbouleh.png",
      ingredients: [
        {
          id: 1,
          name: "2 cups water",
        },
        {
          id: 2,
          name: "1 cup quinoa",
        },
        {
          id: 3,
          name: "1 pinch salt",
        },
        {
          id: 4,
          name: "¼ cup olive oil",
        },
        {
          id: 5,
          name: "½ teaspoon sea salt",
        },
        {
          id: 6,
          name: "¼ cup lemon juice",
        },
        {
          id: 7,
          name: "3 tomatoes, diced",
        },
        {
          id: 8,
          name: "1 cucumber, diced",
        },
        {
          id: 9,
          name: "2 bunches green onions, diced",
        },
        {
          id: 10,
          name: "2 carrots, grated",
        },
        {
          id: 11,
          name: "1 cup chopped fresh parsley",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Bring water to a boil in a medium saucepan; add quinoa and a pinch of salt. Reduce heat to low, cover and simmer for 15 minutes. Allow to cool to room temperature; fluff with a fork.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Meanwhile, combine olive oil, sea salt, lemon juice, tomatoes, cucumber, green onions, carrots, and parsley in a large bowl; stir in cooled quinoa.",
        },
      ],
    },
    {
      id: 7,
      title: "Herb Roasted Chicken with Vegetables",
      category: "main-course",
      description:
        "Oven-roasted whole chicken, potatoes, and onions seasoned with a piquant Kikkoman soy sauce mixture.",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-HerbRstdChic.png",
      ingredients: [
        {
          id: 1,
          name: "1 ½ pounds baking potatoes",
        },
        {
          id: 2,
          name: "⅓ cup Kikkoman soy sauce",
        },
        {
          id: 3,
          name: "3 tablespoons olive oil",
        },
        {
          id: 4,
          name: "2 tablespoons red wine vinegar",
        },
        {
          id: 5,
          name: "2 cloves garlic, pressed",
        },
        {
          id: 6,
          name: "1 teaspoon dried oregano leaves, crumbled",
        },
        {
          id: 7,
          name: "1 teaspoon dried rosemary, crushed",
        },
        {
          id: 8,
          name: "¾ teaspoon pepper",
        },
        {
          id: 9,
          name: "1 large onion, thinly sliced",
        },
        {
          id: 10,
          name: "1 (4 pound) whole roasting chicken",
        },
      ],
      directions: [
        {
          id: 1,
          title: "Step 1",
          name: "Preheat the oven to 375 degrees F (190 degrees C). Line a large baking pan with foil.",
        },
        {
          id: 2,
          title: "Step 2",
          name: "Cut potatoes in half lengthwise, then cut each piece crosswise into 1/2-inch-thick slices. Mix soy sauce, olive oil, vinegar, garlic, oregano, rosemary, and pepper in a small bowl.",
        },
        {
          id: 3,
          title: "Step 3",
          name: "Place potatoes and onion into the prepared baking pan. Drizzle 1 tablespoon soy sauce mixture over vegetables and toss until evenly coated.",
        },
        {
          id: 4,
          title: "Step 4",
          name: "Discard giblets and neck from chicken. Rinse chicken under cold running water; drain and pat dry. Place chicken, breast-side up, in the center of pan, moving vegetables aside. Brush chicken, including inside the cavity, thoroughly with soy sauce mixture.",
        },
        {
          id: 5,
          title: "Step 5",
          name: "Roast in the preheated oven until no longer pink at the bone and the juices run clear, about 1 hour 15 minutes, brushing with soy sauce mixture and stirring vegetables every 30 minutes. An instant-read thermometer inserted into the thickest part of the thigh, near the bone, should read at least 165 degrees F (74 degrees C). Remove from the oven and let chicken stand for 10 minutes before carving.",
        },
      ],
    },
  ]);

  return (
    <Router>
      <section>
        <Routes>
          <Route element={<MainLayout navLinks={navLinks} />}>
            <Route index element={<Menu foods={foods} />} />
            <Route path="/" element={<Menu />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/add" element={<Add />} />
            <Route path="/:filter" element={<Cards />} />
            <Route path="/recipe/:id" element={<RecipePage foods={foods} />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
};

export default App;
