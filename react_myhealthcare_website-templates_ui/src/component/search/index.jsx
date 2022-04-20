import React from "react";
import SearchIcon from "../../assets/images/mhc-search-icon.svg";
const Iprops = {
  placholder: "",
  btnDisplay: true || false,
};

class SearchForm extends React.Component {
  constructor(props = Iprops) {
    super(props);
    this.state = {
      dropdown: false,
      closebtn: false,
      searchvalue: "",
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handledropDown.bind(this);
    this.handleChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handledropDown() {
    this.setState({ dropdown: true });
    this.setState({ closebtn: true });
  }
  handleCloseDropdown() {
    this.setState({ dropdown: false });
    this.setState({ closebtn: false });
    // this.setState(this.state.searchvalue = '');
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ dropdown: false });
      this.setState({ closebtn: false });
      // this.setState(this.state.searchvalue = '');
    }
  }

  handleChange(e) {
    this.setState({ searchvalue: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Mhc-search w-100" ref={this.wrapperRef}>
          <div className="input-group ">
            {/* <span className="input-group-text"><i className="mhc-icon  icon-search-icon"></i></span> */}
            <span className="input-group-text">
              <img src={SearchIcon} alt="" />
            </span>
            <input
              type="text"
              onKeyUp={() => this.handledropDown()}
              value={this.state.searchvalue}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              id=""
              placeholder={this.props.placeholder}
            />
          </div>
          <button
            className={`btn btn-primary  ${
              this.props.btnDisplay === true ? "d-block" : "d-none"
            }`}
            onClick={() => this.handledropDown()}
          >
            Search
          </button>
          <button
            className={` search-close  ${
              this.state.closebtn === false
                ? "d-none"
                : this.props.btnDisplay === true
                ? "mrr"
                : "d-block"
            }`}
            onClick={() => this.handleCloseDropdown()}
          >
            <i className="mhc-icon icon-cancel text-primary"></i>
          </button>

          <div
            className={`mhc-search-dropdown ${
              this.state.dropdown === false ? "d-none" : "d-block"
            }`}
          >
            <div className="search-header">Hospitals</div>
            <div className="search-body">
              <ul>
                <li>
                  <a
                    href="#"
                    className="active"
                    onClick={() => this.handleCloseDropdown()}
                  >
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0"> Ashoka Hospital</p>
                        <span>Delhi</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => this.handleCloseDropdown()}>
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0">
                          {" "}
                          Ashoka Nursing Home Multispeciality Hospital
                        </p>
                        <span>Krishna Nagar</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* end body */}
            <div className="search-header">Clinics</div>
            <div className="search-body">
              <ul>
                <li>
                  <a href="#" onClick={() => this.handleCloseDropdown()}>
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0"> Ashirvaad Nursing Home</p>
                        <span>Uttam Nagar</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => this.handleCloseDropdown()}>
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0"> Ashi Dental Clinic</p>
                        <span>Rohini Sector 21</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* end body */}
            <div className="search-header">Doctor</div>
            <div className="search-body">
              <ul>
                <li>
                  <a href="#" onClick={() => this.handleCloseDropdown()}>
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0"> Ashima</p>
                        <span>Neuro Physiotherapist</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => this.handleCloseDropdown()}>
                    <div className="d-flex">
                      <div className="text-cricle">A</div>
                      <div>
                        <p className="m-0"> Ashoo Agarwal</p>
                        <span>Orthopedist</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* end body */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchForm;
