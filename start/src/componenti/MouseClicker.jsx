export function MouseClicker() {
  function handleBtnClick(event) {
    console.log(event.target.name);
  }

  function handleImgClick(event) {
    console.log(event.currentTarget.src);
  }

  return (
    <div>
      <button name={"one"} onClick={handleBtnClick}>
        Cliccami!
      </button>
      <button name={"two"} onClick={handleBtnClick}>
        <img src="https://via.placeholder.com/20" onClick={handleImgClick} />
        Cliccami!
      </button>
    </div>
  );
}
