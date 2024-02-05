import Button from "../Button/button";
import TestIcon from "../TestIcon";

function Mainpage() {
  return (
    <>
      <div>This is the main page</div>
      <Button>
        <TestIcon />
        This button
      </Button>
    </>
  );
}

export default Mainpage;
