const Avatar = (props) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
      <div>
        <h1 className="text-3xl font-bold">{props.title}</h1>

        <p className="mt-6 text-xl leading-9">{props.description}</p>

        <div className="flex mt-3 gap-1">{props.socialButtons}</div>
      </div>

      <div className="shrink-0 hidden md:flex">{props.avatar}</div>
    </div>
  );
};

export default Avatar;
