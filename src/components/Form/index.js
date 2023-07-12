export default function Form({ addActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;
    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    addActivity(data);
    form.reset();
    formElements.name.focus();
  }

  return (
    <div>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <h1>Our activity form</h1>

        <label htmlFor="name">Add new activity: </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="e.g. name new activity"
        />
        <label htmlFor="isGoodWeather">Good-weather activity: </label>
        <input id="isGoodWeather" type="checkbox" name="isForGoodWeather" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
