import { useState } from "react";
import { styled } from "styled-components";

export const ComponentTest1 = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Styled.Wrapper>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Styled.TestArea>
        <div>Test</div>
        <div className="ta__2">{inputValue}</div>
      </Styled.TestArea>

      <ul>
        <li>
          내부의 글자길이에 따라 상위 컨테이너 영역을 넘어가는 부분에 대해
          테스트 한글이나 한자의 경우에는 줄바꿈이 자동으로 처리되나, 그 외의
          언어들에 대해서는 브라우저가 자동으로 줄바꿈 처리를 하지 못함
        </li>
        <li>
          브라우저의 텍스트 렌더링 방식에 있어서 문제가 있는듯함 앞으로
          테스트시에 word-break 이나 white-space를 추가해줘서 예외사항에 대한
          확인이 필요함
        </li>
        <li>
          white-space: normal 이 default 인데 해당 css는 적용이 잘되지 않음
          word-break: break-all을 통해 원하는 줄바꿈을 구현해야함
        </li>
        <li>
          넘치는 영역에 대해 줄바꿈을 위해 word-break을 추가하는것은 당연한
          현상이다.
        </li>
      </ul>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    background-color: yellow;
  `,
  TestArea: styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;

    .ta__2 {
      display: flex;
      white-space: normal;
    }
  `,
};
