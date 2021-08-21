import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to='/' />}
      <Section>
        <h5><p>Hiring in a hurry? -  </p></h5>
        <p>Find talented pros in record time with Upwork and keep business moving.</p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 52px;
  margin: auto; 
  max-width: 80%;
`
const Section = styled.div`
  min-height: 50px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  h5{
      color: #0051ff;
      font-size: 14px;
      p{
          font-weight: 700;
          margin: 0;
          color: #0051ff;
      }
  }
  p{
      font-size: 14px;
      color: black;
      font-weight: 600;
  }
  @media (max-width: 768px) {
          flex-direction: column;
      padding: 0 5px;
  }
`
const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  
  margin: 25px 0;
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
  }
`

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(Home);