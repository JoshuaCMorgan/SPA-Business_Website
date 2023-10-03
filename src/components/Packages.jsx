import { Title } from "./Title";
import { packages } from "../utils/links";
import { Package } from "./Package";

export const Packages = () => {
  return (
    <section className="section" id="packages">
      <Title title="featured" subTitle="packages" />
      <div className="section-center featured-center">
        {packages.map((info) => {
          return <Package key={info.id} {...info} />;
        })}
      </div>
    </section>
  );
};
