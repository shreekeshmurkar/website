import ReactMarkdown from "react-markdown";
export default function OpeningItem(props) {
  return (
    <>
      <ReactMarkdown>{props.career.fields.Description}</ReactMarkdown>
    </>
  );
}
