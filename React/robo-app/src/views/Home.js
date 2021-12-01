import { useState } from "react";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const handleFakeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/robot-list");
    }, 2000);
  };
  return (
    <div>
      <h2>Pagina de acasa</h2>
      <button
        onClick={() => {
          handleFakeLoading();
        }}>
        Incarca urmatoarea pagina!
      </button>
      <h1>Page is loading: {loading.toString()} ... </h1>
    </div>
  );
}

export default Home;
