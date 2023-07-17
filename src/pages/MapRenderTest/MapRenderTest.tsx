import React, { useState } from "react";

export const MapRenderTest = () => {
  // 초기 데이터 배열 생성
  const initialData = [
    { id: 1, name: "Item 1", value: "Value 1" },
    { id: 2, name: "Item 2", value: "Value 2" },
    { id: 3, name: "Item 3", value: "Value 3" },
    // ... 이하 생략 ...
  ];

  // 데이터 배열을 상태로 관리
  const [data, setData] = useState(initialData);

  const handleChangeSecondAndThirdValue = () => {
    // 배열을 복사하여 수정
    const newData = [...data];
    // 3번째 요소의 value만 변경
    newData[1] = { ...newData[1], value: "New Value for Item new 2" };
    newData[2] = { ...newData[2], value: "New Value for Item new 3" };
    // 상태 업데이트
    setData(newData);
  };

  // 3번째 값 변경 함수
  const handleChangeSecondValue = () => {
    // 배열을 복사하여 수정
    const newData = [...data];
    // 3번째 요소의 value만 변경
    newData[1] = { ...newData[1], value: "New Value for Item 2" };
    // 상태 업데이트
    setData(newData);
  };

  // 3번째 값 변경 함수
  const handleChangeThirdValue = () => {
    // 배열을 복사하여 수정
    const newData = [...data];
    // 3번째 요소의 value만 변경
    newData[2] = { ...newData[2], value: "New Value for Item 3" };
    // 상태 업데이트
    setData(newData);
  };

  const handleAdd = () => {
    data.push({ id: 4, name: "Item 4", value: "Value 4" });
    setData(data);
  };

  return (
    <div>
      <button onClick={handleChangeSecondValue}>2번째 값 변경</button>
      <button onClick={handleChangeThirdValue}>3번째 값 변경</button>
      <button onClick={handleChangeSecondAndThirdValue}>2,3번째 값 변경</button>
      <button onClick={handleAdd}>4번째 값 추가</button>
      <ul>
        {/* 데이터 배열을 순회하며 렌더링 */}
        {data.map((item) => (
          <Item key={item.id} name={item.name} value={item.value} />
        ))}
      </ul>
      <Test />
    </div>
  );
};

const Item = React.memo((props: { name: any; value: any }) => {
  return (
    <li>
      {props.name}: {props.value}
    </li>
  );
});

const Test = () => {
  const [txt, setTxt] = useState("Hello");

  return <button onClick={() => setTxt("TEST")}>{txt}</button>;
};
