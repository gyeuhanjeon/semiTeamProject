import axios from "axios";
const HEADER = 'application/json';
const TEAM_DOMAIN = "http://localhost:8090/Team_Project/";

const TeamAPI = {
  // 로그인 기능
  userLogin: async function(id, pw) {
    const loginObject = {
      id: id,
      pwd: pw
    }
    return await axios.post(TEAM_DOMAIN + "LoginServlet", loginObject, HEADER);
  }
}

export default TeamAPI;