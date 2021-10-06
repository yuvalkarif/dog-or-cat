function Main({ executeScroll }: { executeScroll: () => void }) {
  return (
    <section className="main-container">
      <div className="main-left">
        <h1>Let me sniff your picture...</h1>
        <p>
          Not sure what is that creature in house, always had doubts in your
          closest pal? <br /> as a specially trained sniffing AI i am here to
          help to identify your creature.
        </p>
        <button onClick={executeScroll}>Start Now!</button>
      </div>
      <img src="/pet.png" alt="pet"></img>
    </section>
  );
}

export default Main;
