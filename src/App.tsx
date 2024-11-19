import { useLayoutEffect } from "react";

import { VaAlertExpandable } from "@department-of-veterans-affairs/component-library/dist/react-bindings";

import "@department-of-veterans-affairs/formation/dist/formation.min.css";
import "@department-of-veterans-affairs/component-library/dist/main.css";

function App() {
  useLayoutEffect(() => {
    import("@department-of-veterans-affairs/web-components/loader").then(
      ({ defineCustomElements }) => {
        defineCustomElements();
      },
    );
  }, []);

  return (
    <VaAlertExpandable trigger="Alert Headline" status="info">
      <p>Alert content</p>
    </VaAlertExpandable>
  );
}

export default App;
