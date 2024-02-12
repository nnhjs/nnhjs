import './fundametals-recap.css';

const FundamentalsRecap = () => {
  return (
    <section className="fundamentals-recap">
      <h1 className="mb-4 text-2xl">Fundamentals Recap</h1>
      {/*  position: relative*/}
      <div className="box bg-red-300" />
      <div className="box relative left-16 top-8 bg-blue-300" />
      <div className="box bg-yellow-300" />
    </section>
  );
};

export default FundamentalsRecap;
