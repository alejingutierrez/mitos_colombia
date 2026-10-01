import OpenAI from 'openai';
// Build and public reads require no provider credentials. Resolve only on use.
export function createLazyOpenAI(options) {
  let client;
  return new Proxy({}, { get(_target, key) {
    client ||= new OpenAI(options || { apiKey: process.env.OPENAI_API_KEY });
    const value = Reflect.get(client, key, client);
    return typeof value === 'function' ? value.bind(client) : value;
  } });
}
