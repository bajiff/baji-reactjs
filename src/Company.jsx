import Logo from "./assets/logo.png"
const Company = (props) => {
  const name = props.name;
  const company = props.company;
  return (
    <div>
      <h1>{company}</h1>
      <ul>
        <li>Nama: {name}</li>
        <li>Bidang: Integrated Farm</li>
        <li>Tagline: Tanaman is Gacor</li>
        <img src={Logo} alt="Farm Logo" />
      </ul>
    </div>
  )
}

export default Company;