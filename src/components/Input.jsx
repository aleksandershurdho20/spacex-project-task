import './Input.css';

const Input = ({
  value,
  className,
  label,
  beforeimg,
  image,
  alt,
  type,
  name,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <div className={`Input ${className}`}>
      {!!label && <label >{label}</label>}

      <div className="group-input">
        {!!beforeimg && <img src={image} alt={`${alt}`} />}
        <input
          readOnly={!onChange}
          type={type}
          name={`${name}`}
          id={`${id}`}
          value={value}
          onChange={onChange}
          style={
            beforeimg
              ? { padding: '5px 15px 5px 45px' }
              : { padding: '5px 15px' }
          }
          placeholder={`${placeholder}`}
        />
      </div>
    </div>
  );
};

export default Input;
