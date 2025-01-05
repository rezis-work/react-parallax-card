import CardContainer from "./components/CardContainer";
import CardBody from "./components/cardBody";
import CardItem from "./components/CardItem";

import product from "./data/data.json";

function App() {
  return (
    <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba78bd] to-[#613177]">
      <CardContainer className="inet-var">
        <CardBody className="group/card m-auto w-[500px] flex flex-col gap-5 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba78bd] to-[#613177] p-6 hover:shadow-lg">
          <CardItem className="mt-4 w-full">
            <img src={product.product.src} alt={product.product.title} />
          </CardItem>

          <CardItem className="text-5xl font-bold text-gray-50" component="h1">
            {product.product.title}
          </CardItem>

          <CardItem
            className="mt-2 max-w-sm text-xl font-semibold text-[#ffbd78]"
            component="p"
          >
            {product.product.description}
          </CardItem>

          <div className="mt-20 flex w-full items-center justify-between">
            <CardItem
              component="a"
              href="/"
              className="rounded-xl px-4 text-lg font-normal dark:text-white"
            >
              Share
            </CardItem>
            <CardItem className="self-start text-xl text-[#ffbd78]">
              {product.product.price}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default App;
