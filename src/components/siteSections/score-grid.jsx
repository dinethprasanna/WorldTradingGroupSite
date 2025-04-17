function ScoreGrid(props) {
  return (
    <>
      <div className="score-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-3 lg:gap-5">
        <div className="yellow-card col-span-1">
          <p className="score-value bg-[#6B5931] px-[32px] py-[24px] lg:px-[48px] lg:py-[26px] rounded-2xl text-(--yellow-text) text-center">
            12345
          </p>
          <p className="score-name text-sm md:text-base text-(--yellow-text) text-center mt-2">
            Days on market
          </p>
        </div>
        <div className="yellow-card col-span-1">
          <p className="score-value bg-[#6B5931] px-[32px] py-[24px] lg:px-[48px] lg:py-[26px] rounded-2xl text-(--yellow-text) text-center">
            12345
          </p>
          <p className="score-name text-sm md:text-base text-(--yellow-text) text-center mt-2">
            Members
          </p>
        </div>
        <div className="yellow-card col-span-1">
          <p className="score-value bg-[#6B5931] px-[32px] py-[24px] lg:px-[48px] lg:py-[26px] rounded-2xl text-(--yellow-text) text-center">
            12345
          </p>
          <p className="score-name text-sm md:text-base text-(--yellow-text) text-center mt-2">
            Desposited
          </p>
        </div>
        <div className="yellow-card col-span-1">
          <p className="score-value bg-[#6B5931] px-[32px] py-[24px] lg:px-[48px] lg:py-[26px] rounded-2xl text-(--yellow-text) text-center">
            12345
          </p>
          <p className="score-name text-sm md:text-base text-(--yellow-text) text-center mt-2">
            Total Paid
          </p>
        </div>
      </div>
    </>
  );
}

export default ScoreGrid;
