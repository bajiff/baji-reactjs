import Company from "./Company";
import Card from "./Card";
import FacebookProfile from "./FacebookProfile";
const App = () => {
  return (
    <>
      <Company name="Meki" company="Meki Farm"/>
      <Company name="Jeki" company="Jeki Farm"/>
      <FacebookProfile name="Gandi" username="gandi-123" bio="Kamu bahagia aku bahagia" isVerified />
      <Card>Infokan</Card>
    </>
  );
};

export default App;