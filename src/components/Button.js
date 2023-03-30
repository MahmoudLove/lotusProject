import classNames from 'classnames';
function Button({ children, cart, product, remove, className, ...rest }) {
  const classes = classNames(
    'px-7 py-3 mb-4 cursor-pointer inline-block ',
    {
      'bg-black text-white text-xl': product,
      'bg-cyan-500 text-black text-xl': cart,
      'bg-red-500 text-white text-xs px-[2px] py-[2px]': remove,
    },
    className
  );
  return (
    <div className="text-center">
      <div className={classes} {...rest}>
        {children}
      </div>
    </div>
  );
}

export default Button;
