import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import {products} from "@/utils/products";
import {truncateText} from "@/utils/truncateText";


export default function Home() {
  return (
  <div className="p-8">
    <Container>
      <div>
        <HomeBanner/>
      </div>
      <div>
        {products.map((product:any)=>{
          return <div>{truncateText(product.name)}</div>;
        })}
      </div>
    </Container>
  </div>
  )
}
