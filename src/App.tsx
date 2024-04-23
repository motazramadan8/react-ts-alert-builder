import Alert from "./components/Alert/Alert";
import { Ban, BellRing, Info, CheckCheck, TriangleAlert } from "lucide-react";

function App() {
  return (
    <div>
      <Alert
        type="alert-notify"
        icon={<BellRing />}
        title="Something went wrong"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
          quasi fugit perferendis expedita amet quisquam{" "}
          <a href="/">voluptatem</a> a accusamus.
        </p>
      </Alert>

      <Alert
        type="alert-danger"
        icon={<Ban />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        quasi fugit perferendis expedita amet quisquam voluptatem a accusamus."
      />

      <Alert
        type="alert-info"
        icon={<Info />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        quasi fugit perferendis expedita amet quisquam voluptatem a accusamus."
      />

      <Alert
        type="alert-success"
        icon={<CheckCheck />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        quasi fugit perferendis expedita amet quisquam voluptatem a accusamus."
      />

      <Alert
        type="alert-warning"
        icon={<TriangleAlert />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        quasi fugit perferendis expedita amet quisquam voluptatem a accusamus."
      />
    </div>
  );
}

export default App;
