// import axios from 'axios';
import * as React from "react";
import moment from "moment";
import { ThemeProvider } from "mineral-ui/themes";
import { PrimaryNav, NavItem } from "mineral-ui/Navigation";
import Table from "mineral-ui/Table";
import Text from "mineral-ui/Text";

const Index = ({ hi }) => {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    const resp = await axios.get(`http://${req.headers.host}/api/data`);
    setUsers(
      resp.data.map((user) => {
        return {
          id: user.id,
          FirstName: user.FirstName,
          DateOfBirth: moment(user.DateOfBirth).format("MMMM Do YYYY"),
        };
      })
    );
  };
  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <ThemeProvider>
      <div>
        <Text as="h1">Next.js</Text>
        <PrimaryNav align="left" maxItemWidth="20rem">
          <NavItem href="/">Create React App</NavItem>
          <NavItem href="/nextjs" selected>
            Next.js
          </NavItem>
        </PrimaryNav>
        <Table data={users} rowKey="id" title="Users" hideTitle />
      </div>
    </ThemeProvider>
  );
};

Index.getStaticProps = async ({ req }) => {
  return { hi: "hi" };
};

export default Index;
