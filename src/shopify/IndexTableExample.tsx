import {
  Badge,
  Card,
  IndexTable,
  IndexTableProps,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

const orders = [
  {
    id: "1020",
    order: "#1020",
    date: "13/06/2023 16:36",
    customer: "Tuyến",
    total: "100.000đ",
    paymentStatus: <Badge progress="complete">Đã thanh toán</Badge>,
    fulfillmentStatus: (
      <Badge progress="complete" status="success">
        Đã xử lý
      </Badge>
    ),
  },
  {
    id: "1019",
    order: "#1019",
    date: "13/06/2023 14:53",
    customer: "Anh Nguyễn Đức",
    total: "2.800.000₫",
    paymentStatus: (
      <Badge progress="partiallyComplete" status="highlight">
        Thanh toán một phần
      </Badge>
    ),
    fulfillmentStatus: (
      <Badge progress="partiallyComplete" status="highlight">
        Đang xử lý
      </Badge>
    ),
  },
  {
    id: "1018",
    order: "#1018",
    date: "14/06/2023 09:59	",
    customer: "	hà nguyễn văn",
    total: "200.000đ",
    paymentStatus: (
      <Badge progress="incomplete" status="warning">
        Chưa thanh toán
      </Badge>
    ),
    fulfillmentStatus: (
      <Badge progress="incomplete" status="critical">
        Chưa xử lý
      </Badge>
    ),
  },
];

Array.from(new Array(300)).forEach((_, idx) => {
  const id = 1000 + idx;
  orders.push({
    id: "" + id,
    order: "#" + id,
    date: "13/06/2023 16:36",
    customer: "Tuyến",
    total: "100.000đ",
    paymentStatus: <Badge progress="complete">Đã thanh toán</Badge>,
    fulfillmentStatus: (
      <Badge progress="complete" status="success">
        Đã xử lý
      </Badge>
    ),
  });
});

const defaultOrderHeaders: IndexTableProps["headings"] = [
  {
    title: "Mã đơn hàng",
  },
  {
    title: "Ngày tạo đơn",
  },
  {
    title: "Tên khách hàng",
  },
  {
    title: "Thành tiền",
    alignment: "end",
  },
  {
    title: "Trạng thái thanh toán",
  },
  {
    title: "Trạng thái vận chuyển",
  },
];

export function IndexTableExample() {
  const { selectedResources, handleSelectionChange } =
    useIndexResourceState(orders);
  const rowMarkup = orders.map(
    (
      { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
      index
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{date}</IndexTable.Cell>
        <IndexTable.Cell>{customer}</IndexTable.Cell>
        <IndexTable.Cell>{total}</IndexTable.Cell>
        <IndexTable.Cell>{paymentStatus}</IndexTable.Cell>
        <IndexTable.Cell>{fulfillmentStatus}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <Card>
      <IndexTable
        itemCount={orders.length}
        selectedItemsCount={selectedResources.length}
        onSelectionChange={handleSelectionChange}
        headings={defaultOrderHeaders}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}
