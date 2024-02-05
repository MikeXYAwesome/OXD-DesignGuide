import ListGroup from "../ListGroup";
import "./css/componetspage.css";

function OXDcomponets() {
  let items = ["Buttons", "DropDown", "Radio", "Check Box", "mainpage"];

  const hadleSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <>
      <div className="comMainWraper">
        <div className="topNaveBar"></div>
        <h1>this is the compnets page</h1>
        <p>Navigation</p>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={hadleSelectItem}
        ></ListGroup>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </>
  );
}

export default OXDcomponets;
