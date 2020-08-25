import React, { Component } from "react";

class SearchProperty extends Component {
  render() {
    return (
      <article>
        <form>
          <article className="d-flex flex-column align-items-center justify-content-center">
            <h5>Find a Property</h5>
            <p>
              All you need complete setup for your <br /> comfort, choosing from
              a variety of <br /> charming & luxury well furnished <br />
              apartment
            </p>
          </article>
          <article className="form-control-section">
            <select name="type">
              <option value="rent">Rent</option>
            </select>
            <input
              name="need"
              type="text"
              placeholder="Tell us what you want"
            />
            <button type="submit">SEARCH</button>
          </article>
        </form>
      </article>
    );
  }
}

export default SearchProperty;
