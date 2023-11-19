import React from 'react';

const Form = () => {
    return (
        <>
        <div className="body">
  <form id="basic-form" method="post" noValidate="">
    <div className="form-group">
      <label>Text Input</label>
      <input type="text" className="form-control" required="" />
    </div>
    <div className="form-group">
      <label>Email Input</label>
      <input type="email" className="form-control" required="" />
    </div>
    <div className="form-group">
      <label>Text Area</label>
      <textarea
        className="form-control"
        rows={5}
        cols={30}
        required=""
        defaultValue={""}
      />
    </div>
    <div className="form-group">
      <label>Checkbox</label>
      <br />
      <label className="fancy-checkbox">
        <input
          type="checkbox"
          name="checkbox"
          required=""
          data-parsley-errors-container="#error-checkbox"
          data-parsley-multiple="checkbox"
        />
        <span>Option 1</span>
      </label>
      <label className="fancy-checkbox">
        <input
          type="checkbox"
          name="checkbox"
          data-parsley-multiple="checkbox"
        />
        <span>Option 2</span>
      </label>
      <label className="fancy-checkbox">
        <input
          type="checkbox"
          name="checkbox"
          data-parsley-multiple="checkbox"
        />
        <span>Option 3</span>
      </label>
      <p id="error-checkbox" />
    </div>
    <div className="form-group">
      <label>Radio Button</label>
      <br />
      <label className="fancy-radio">
        <input
          type="radio"
          name="gender"
          defaultValue="male"
          required=""
          data-parsley-errors-container="#error-radio"
          data-parsley-multiple="gender"
        />
        <span>
          <i />
          Male
        </span>
      </label>
      <label className="fancy-radio">
        <input
          type="radio"
          name="gender"
          defaultValue="female"
          data-parsley-multiple="gender"
        />
        <span>
          <i />
          Female
        </span>
      </label>
      <p id="error-radio" />
    </div>
    <div className="form-group">
      <label htmlFor="food">Multiselect</label>
      <br />
      <select
        id="food"
        name="food[]"
        className="multiselect multiselect-custom"
        multiple="multiple"
        data-parsley-required=""
        data-parsley-trigger-after-failure="change"
        data-parsley-errors-container="#error-multiselect"
        style={{ display: "none" }}
        data-parsley-multiple="food[]"
      >
        <option value="cheese">Cheese</option>
        <option value="tomatoes">Tomatoes</option>
        <option value="mozarella">Mozzarella</option>
        <option value="mushrooms">Mushrooms</option>
        <option value="pepperoni">Pepperoni</option>
        <option value="onions">Onions</option>
      </select>
      <div className="btn-group">
        <button
          type="button"
          className="multiselect dropdown-toggle btn btn-default"
          data-toggle="dropdown"
          title="None selected"
        >
          <span className="multiselect-selected-text">None selected</span>{" "}
          <b className="caret" />
        </button>
        <ul className="multiselect-container dropdown-menu">
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="cheese" /> Cheese
              </label>
            </a>
          </li>
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="tomatoes" /> Tomatoes
              </label>
            </a>
          </li>
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="mozarella" /> Mozzarella
              </label>
            </a>
          </li>
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="mushrooms" /> Mushrooms
              </label>
            </a>
          </li>
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="pepperoni" /> Pepperoni
              </label>
            </a>
          </li>
          <li>
            <a tabIndex={0}>
              <label className="checkbox">
                <input type="checkbox" defaultValue="onions" /> Onions
              </label>
            </a>
          </li>
        </ul>
      </div>
      <p id="error-multiselect" />
    </div>
    <br />
    <button type="submit" className="btn btn-primary">
      Validate
    </button>
  </form>
</div>

            
        </>
    );
};

export default Form;