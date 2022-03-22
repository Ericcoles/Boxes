const Box = (props) => {
  return (
    <div className="box">
      <h2>{props.name}</h2>
      <p>title: {props.title}</p>
      <p>age: {props.age}</p>
    </div>
  );
};

export default Box;
