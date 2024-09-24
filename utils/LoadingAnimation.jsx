import { HashLoader, RotateLoader } from "react-spinners";
export const LoadingAnimation = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center w-full h-full">
        <div className="border-t-4 border-blue-600 border-solid rounded-full w-full h-full max-w-[300px] max-h-[300px] animate-spin"></div>
      </div> */}
      {/* <div className="px-10 py-10 md:px-10 md:py-10 justify-center items-center"> */}
      {/* <HashLoader cssOverride={{}} size={150} speedMultiplier={2} /> */}

      {/* </div> */}
      <div className=" flex w-[300px] md:w-[300px] h-[330px] md:h-[400px] p-8 m-8 md:p-48 md:m-48 align-middle justify-center items-center">
        <RotateLoader size={20} />
      </div>
    </>
  );
};
