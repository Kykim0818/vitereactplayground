import { useState } from "react";
import { Foo } from "../components/Foo";

export const MapRenderTest = () => {
  const [data, setData] = useState<number[]>([]);

  return (
    <div>
      <button
        onClick={() => {
          setData([...data, 0]);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          const removeArr = [...data];
          removeArr.pop();
          setData(removeArr);
        }}
      >
        Minus
      </button>

      <section>
        {/* {data.map((ele, index) => (
          <Foo index={index} key={`${index}`} />
        ))} */}
        <Foo index={1} />
        <Foo index={2} />
      </section>
    </div>
  );
};

/**
 * 이게 지금
 */
