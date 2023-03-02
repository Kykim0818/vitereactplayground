export const SRS = () => {
  // 대소문자 변경시에 문제가 없는지 확인해보자
  // 처음에 변경 이력이 잡히지 않아,
  // git config core.ignorecase false 를 하고 변경내역에 담아 push를했다.

  // repo에 놀랍게도 SRS와 Srs의 두폴더 현재 모두 존재

  // 그럼 이미 코드를 받아서 사용한사람이 push하면 어떻게 될지 테스트
  // 내려받는 사람의 폴더는 바뀌지 않는다.
  // 특이사항1
  /**
   * 대소문자를 변경하지 않은 사람이 코드를 내려받자 대소문자 2개폴더가 생기면서 변경사항이 지속적으로 발생한다.
   * 추측에 의하면 변경사항에서 대소문자를 구분하지 않고, 변경사항을 끌어 오기 때문에 그렇게 되는 것 같다.
   * 2개의 변경사항에 대해 같게 관리하기 위해서 한가지를 변경해도 대소문자로 된 폴더의 변경사항이 둘다 추적 되는 듯 하다.
   */

  /**
   *  추가 변경시에도 커밋자체는 이후 변경된 Srs의 파일 변경내역만 커밋할 수 있다.
   */
  return <div>SRS</div>;
};
