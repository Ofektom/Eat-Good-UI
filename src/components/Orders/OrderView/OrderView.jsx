import axios from 'axios';
import React from 'react'

const OrderView = () => {
    const [orders, setOrders] = () => useState([]);

    useEffect(() => {
        viewOrder();
    }, []);

    const viewOrder = async() => {
        const result = await axios.get("localhost:8081/api/v1/orders/view-all-orders");
        setOrders(result.data);
    }
  return (
    <div>OrderView</div>
  )
}

export default OrderView