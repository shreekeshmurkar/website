// import { table, minifyRecords } from "./utils/airtable";

// export default async function Handler(req, res) {
//     try {
//         const records = await table.select({}).firstPage();
//         const minifiedRecords = minifyRecords(records);
//         res.status(200).json(minifiedRecords);
//     } catch(err) {
//       res.status(500).json({ msg: "something went" });
//     }
// }