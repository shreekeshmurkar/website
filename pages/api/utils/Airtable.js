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

const getOpeningById = ({ openingId }) => {  
  return fetch(`${process.env.AIRTABLE_API_ENDPOINT}/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}/${openingId}`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  }).then(response => response.json());
};
export { getOpenings, getOpeningById};
