import { useEffect, useState } from "react";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import ProductCard from "../../../../globalcomponents/productCard";
import { useDispatch, useSelector } from "react-redux";
import ProductCardList from "../../../../globalcomponents/ProductCardList";
import CustomPagination from "../../../../globalcomponents/CustomPagination";
import { setRange } from "../../../../service/redux/feature/paginationSlice";

const Showcasebody = () => {
  const viewMode = useSelector((state) => state.view.mode);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const StartIndex = (page - 1) * pageSize;
  const EndIndex = StartIndex + pageSize;
  const paginatedProducts = featuredData.slice(StartIndex, EndIndex);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRange({
        from: StartIndex + 1,
        to: Math.min(EndIndex, featuredData.length),
        total: featuredData.length,
      })
    );
  }, [page, dispatch]);
  return (
    <>
      <div className="mt-4 ">
        {viewMode == "grid" ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-4 
          mx-[30px] xl:mx-[0px] 2xl:mx-auto gap-y-5 xl:gap-x-6 2xl:gap-x-14 mt-10 "
          >
            {paginatedProducts?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                discount={product.discount}
                pCategory={product.pCategory}
                pName={product.pName}
                ratings={product.ratings}
                totalRatings={product.totalRatings}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <div className="mx-[20px] xl:mx-auto  xl:gap-x-14 mt-10 ">
            {paginatedProducts?.map((product) => (
              <ProductCardList
                key={product.id}
                id={product.id}
                image={product.image}
                discount={product.discount}
                pCategory={product.pCategory}
                pName={product.pName}
                ratings={product.ratings}
                totalRatings={product.totalRatings}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
      {featuredData.length > pageSize && (
        <div>
          <CustomPagination
            current={page}
            total={featuredData.length}
            onChange={setPage}
            pageSize={pageSize}
          />
        </div>
      )}
    </>
  );
};

export default Showcasebody;
