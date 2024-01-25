const Button = (props) => {
  return (
    <a href={props.href}>
      <button type={props.type} class="button-54" role="button">
        {props.action}<i class={props.icon}></i>
      </button>
    </a>
  );
};

export default Button;
