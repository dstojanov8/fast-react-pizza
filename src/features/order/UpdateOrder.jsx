import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  // TODO: try chnging some other user information
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ request, params }) => {
  //* In this case we don;t have any inputs, only thing we have is a button
  //* No need to read any data from the request (we will leave {request, params})
  console.log("update", request, params);
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
};
