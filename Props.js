const Props = () => {
    return (
        <>
          <Person/>
          <Car/>
          <Information/>
          <JobInfo/>
          <Product/>
          <Student/>
          <Task/>
          <User/>
        </>
    )
}

//Example 1
const Person = (props) => {
    return (
      <div>
        <h2>Name :{props.name}</h2>
        <p>Hobby: {props.hobby}</p>
      </div>
    );
  };
  
function Bio() {
    return <Person name='Mayur' hobby='Playing Video Games' />;
}

//Example 2
const Car = (props) => {
    return (
      <div>
        <h2>Brand: {props.brand}</h2>
        <p>Model: {props.model}</p>
      </div>
    );
  };
  
  
function CarInfo() {
    return <Car brand='Porsche' model='Porsche Taycan GTS SPORT WAGON' />;
}

//Example 3
const Information = (props) => {
    return (
      <div>
        <h1>My name is {props.name}</h1>
        <p>My age is {props.age}</p>
        <button>{props.btnname}</button>
      </div>
    );
  }
  
  function Greeting() {
    return <Information name='Mayur pawar' age={23} btnname='Submit'/>
  }

//Example 4
const JobInfo = (props) => {
  return (
    <div>
      <h2>Job title: {props.title}</h2>
      <p>Company: {props.company}</p>
    </div>
  );
};

function Job() {
    return <Job title='Developer' company='Google' />;
}

//Example 5
const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};

function ProductDisplay() {
  return <Product name='Mobile' price={50000} />
}

//Example 6
const Student = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Grade: {props.grade}</p>
    </div>
  );
};

function StudentInfo() {
    return <Student name='Raj' grade='A+' />;
}
//Example 7
const Task = (props) => {
  return (
    <div>
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
    </div>
  );
};

function TaskDetails() {
    return <Task name='Mayur' status='Complete' />;
}
//Example 8
const User = (props) => {
  return (
    <div>
      <h2>User: {props.name}</h2>
      <p>Location: {props.city}</p>
    </div>
  );
};

function UserProfile() {
  return <User username='Mayur' city='Pune' />;
}

export default Props