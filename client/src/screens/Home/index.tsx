import Link from "../../components/Link";
import Page from "../../components/Page";

const Home: React.FC = () => {
  return (
    <Page title={"Home"}>
      hey{" "}
      <Link href={"https://expatsfacilities.com/fr/dashboard/admin/users"}>
        home
      </Link>
    </Page>
  );
};

export default Home;
