import axios from "axios";
import { queryService } from ".";

async function createPersonService(person) {
  return queryService(() => axios.post("/persons", person));
}

export default createPersonService;