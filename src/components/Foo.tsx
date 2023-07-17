import { useEffect } from "react";

export const Foo = (props: { index: number; value: string }) => {
  useEffect(() => {
    console.log("Foo render", props.index);
  }, []);

  useEffect(() => {
    return () => {
      console.log("destroy?", props.index);
    };
  });

  return (
    <div>
      Foo {props.index} + {props.value}
    </div>
  );
};
