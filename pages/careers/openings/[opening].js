import { getOpeningById } from "../../api/utils/Airtable";
import OpeningItem from '../../../components/Careers/OpeningItem';

function Openings(props) {
  return (
    <>      
      <OpeningItem {...props} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const res = await getOpeningById({
    openingId: ctx.params.opening,
  });  
  return { props: { fields: res.fields } };
}
export default Openings;