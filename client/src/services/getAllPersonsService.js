import axios from 'axios';
import { queryService } from ".";

async function getAllPersonsService() {
  return queryService(() => axios.get('http://localhost:3001/persons'));
}

export default getAllPersonsService;