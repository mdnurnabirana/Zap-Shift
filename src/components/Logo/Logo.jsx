import logoSrc from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end relative">
      <img src={logoSrc} alt="Zap Shift logo" />
      <h1 className="text-3xl text-[#0B0B0B] font-bold -ml-4 z-10 absolute left-9 -bottom-1">
        ZapShift
      </h1>
    </div>
  );
};

export default Logo;