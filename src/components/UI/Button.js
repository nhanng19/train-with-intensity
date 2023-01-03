const Button = (props) => {
  return (
    <a href={props.href}>
      <button type={props.type}class="button-54" role="button">
        <i class={props.icon}></i>&nbsp;
        {props.action}
      </button>
    </a>
  );
};

export default Button;
