const InputCol = ({ text, placeholder }) => {
  return (
    <div className="w-full relative p-6">
      <h2 className="bg-[#173535] absolute z-10 text-sm top-[10px] p-1 left-[32px] tracking-wide">
        {text}
      </h2>
      <input
        className="w-full bg-[#173535] py-2 px-3 rounded-md border border-white placeholder:text-white"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputCol;
