import './Input.css';

const Input = ({
  value,
  className,
  label,
  beforeimg,
  image,
  alt,
  type,
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
          value={value}
          onChange={onChange}
          style={
            beforeimg
              ? { padding: '5px 15px 5px 45px' }
              : { padding: '5px 15px' }
          }
        />
      </div>
    </div>
  );
};

export default Input;
