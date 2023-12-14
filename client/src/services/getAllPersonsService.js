import axios from "axios";
import { queryService } from ".";

async function getAllPersonsService() {
  return queryService(() => axios.get("/persons"));
}

export default getAllPersonsService;