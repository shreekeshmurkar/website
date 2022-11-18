const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const getOpenings = async () => {
  const records = await table.select({}).firstPage();
  return minifyRecords(records);
};

const getOpeningById = async ({ openingId }) => {  
  const record = await table.find(openingId);
  return getMinifiedRecord(record);
};
export { getOpenings, getOpeningById};
