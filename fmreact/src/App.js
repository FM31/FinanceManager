import React from "react";
import Layout from "./components/Layout/Layout";
import ExpenseDetails from "./containers/ExpenseDetails/ExpenseDetails";

function App() {
  return (
    <div>
      <Layout>
        {/* We push multiple pages from this area as props.children - The pages are Authentication, ExpenseDetails, GroupPage and so on*/}
        <ExpenseDetails />
      </Layout>
    </div>
  );
}

export default App;
