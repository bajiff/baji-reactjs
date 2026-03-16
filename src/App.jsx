import Logo from "./assets/logo.png"
const App = () => {
  return (
    <div>
      <h1>Baji APP hehe</h1>
      <ul>
        <li>Nama: Baji Infokan</li>
        <li>Bidang: Integrated Farm</li>
        <li>Tagline: Tanaman is Gacor</li>
        <img src={Logo} alt="Farm Logo" />
      </ul>
    </div>
  );
};

export default App;