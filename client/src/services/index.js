export async function queryService(callback) {
  const response = await callback();
  return response.data;
}