import React from "react";
import API from "../utils/API";


class Employees extends React.Component {
  state = {
    isLoading: true,
    allEmployees: [],
    employees: []
  }

  componentDidMount() {
    API.search()
      .then(employees => {
        console.log(employees);
        this.setState({
          isLoading: false,
          allEmployees: employees.data.results,
          employees: employees.data.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  filterEmployees = (event) => {
    const allEmployees = this.state.allEmployees;
    const gender = event.target.value; // value of the dropdown
    console.log(gender);

    if (gender === "") {
      this.setState({ employees: allEmployees });
    } else {
      this.setState({
        employees: allEmployees.filter(function(employee) {
          if (employee.gender == gender) {
            return true
          }

          return false
        })
      })
    }
  }

  sortEmployees = (event) => {
    const allEmployees = this.state.allEmployees;
    const sortValue = event.target.value;

    if (sortValue === "") {
      this.setState({ employees: allEmployees });
    } else if (sortValue === 'oldToYoung') {
      this.setState({
        employees: allEmployees.sort(function(employee1, employee2) {
          if (employee1.dob.date < employee2.dob.date) {
            return -1;
          }
          if (employee1.dob.date > employee2.dob.date) {
            return 1;
          }

          return 0;
        })
      })
    } else if (sortValue === 'youngToOld') {
      this.setState({
        employees: allEmployees.sort(function(employee1, employee2) {
          if (employee1.dob.date < employee2.dob.date) {
            return 1;
          }
          if (employee1.dob.date > employee2.dob.date) {
            return -1;
          }

          return 0;
        })
      })
    }
  }

  render() {
    const { isLoading, employees } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img id = "office-img" src= "https://s17026.pcdn.co/wp-content/uploads/sites/9/2017/06/AdobeStock_97559781.jpeg"></img>

        <div class="d-flex justify-content-end">
          <div>
            <label>Filter by</label>
            <select onChange={this.filterEmployees}>
              <option value="">Please Select:</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <div>
            <label>Sort By</label>
            <select onChange={this.sortEmployees}>
              <option value="">Please Select</option>
              <option value="youngToOld">Youngest to Oldest</option>
              <option value="oldToYoung">Oldest to Youngest</option>
            </select>
          </div>
        </div>

          <div class= "d-flex justify-content-center">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id.value}>
                  <td>{employee.name.first + ' ' + employee.name.last}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.dob.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


/*
function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.viewsonic.com/library/wp-content/uploads/2019/04/5-new-workplace-design-trends-1.jpg">
        <h1>Employee Directory</h1>
        <h2>Welcome to our Employee Directory! Please type in a name, email address, or phone number to search our cureent employees.  </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
              
            </p>
            <p>

            </p>
            <p>
             
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
*/

export default Employees;
