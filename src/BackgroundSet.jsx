const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function BackgroundSet() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  //   const { colorChangeCont, setColorChangeCont } = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    // setColorChangeCont((prevCount) => prevCount + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default BackgroundSet;
