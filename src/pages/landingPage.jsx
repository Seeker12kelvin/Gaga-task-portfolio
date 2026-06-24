import { useContext } from "react";
import Footer from "../components/ui/footer";
import Main from "../components/ui/main";
import { UserContext } from "../components/ui/user";
import MobileMenu from "../components/ui/mobileMenu";

const LandingPage = () => {
  const { menuBtn } = useContext(UserContext);

  return (
    <>
      {menuBtn ? <MobileMenu /> : null}
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
