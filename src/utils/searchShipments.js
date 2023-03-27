export const searchShipments = (shipments, searchedResults) => {
    return shipments.filter((shipment) =>
       shipment.name.toLowerCase().includes(searchedResults.toLowerCase())
    );
 };
 