import { useCallback, useEffect, useState } from "react";

export const FunctionReInit = () => {
  const [paint, setPaint] = useState(false);

  // 1. 일반함수
  const testFunction1 = () => {
    console.log("a");
  };

  // 2. useCallback으로 했을때 확인
  const testFunction2 = useCallback(() => {
    console.log("a");
  }, []);

  // deps 에 testFunction1, testFunction2 넣어가면서 테스트
  useEffect(() => {
    console.log("deps-testFunction Effect");
  }, []);

  return (
    <div>
      <h2>Function Test</h2>
      <p>
        컴포넌트가 렌더 시, 내부의 함수가 재 선언되는지 테스트해보는 코드
        입니다.
      </p>
      <button onClick={() => setPaint((prevState) => !prevState)}>Paint</button>
    </div>
  );
};
