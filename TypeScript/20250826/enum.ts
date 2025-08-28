enum orderStatus {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

interface Order {
    id: number;
    customerName: string;
    amount: number;
    status: orderStatus;
    createdAt: Date;
}

function getStatusText(status: orderStatus): string {
    switch (status) {
        case orderStatus.Pending:
            return "주문 대기 중";
        case orderStatus.Confirmed:
            return "주문 확정";
        case orderStatus.Shipped:
            return "상품 배송 중";
        case orderStatus.Delivered:
            return "상품 배송 완료";
        case orderStatus.Cancelled:
            return "주문 취소됨";
        default:
            return "알 수 없는 상태";
    }
}

const order: Order = {
    id: 1,
    customerName: "고객님",
    amount: 50000,
    status: orderStatus.Pending,
    createdAt: new Date(),
};

console.log(getStatusText(order.status));
