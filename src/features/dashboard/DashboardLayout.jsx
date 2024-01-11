import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div className="">Stats</div>
      <div className="">todays acitivity</div>
      <div className="">chart duration</div>
      <div className="">chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
