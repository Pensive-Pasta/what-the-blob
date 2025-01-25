import Spline from "@splinetool/react-spline";
export default function App() {
  return (
    <div className="app">
      <div className="content">
        <h1>What the blob</h1>
        <p>Experimenting with 3D integration in React apps!</p>
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Read More
        </button>
      </div>
      <div className="canvas">
        <Spline
          scene="https://prod.spline.design/04yd7RKyz61TUzKA/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
}
