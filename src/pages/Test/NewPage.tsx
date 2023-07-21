import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

const history = createBrowserHistory();

export const NewPage = () => {
  const [visible, setVisible] = useState(false);
  const [locationKeys, setLocationKeys] = useState<string[]>([]);

  const handleClose = () => {
    console.log("close");
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    return history.listen((element) => {
      if (history.action === "PUSH") {
        setLocationKeys([element.location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === element.location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // 앞으로 가기
        } else {
          setLocationKeys((keys) => [element.location.key, ...keys]);

          // 뒤로 가기
          console.log("!!! test");
          alert("?");
          window.history.pushState(null, "", "/modalTest");
          handleClose();
        }
      }
    });
  }, [locationKeys, history, handleClose]);

  return (
    <div>
      Test
      <button onClick={() => setVisible(true)}>Open</button>
      {visible && (
        <Modal handleClose={handleClose}>
          <div>
            Modal
            <button onClick={handleClose}>close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
