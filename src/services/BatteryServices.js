import batteryData from './DataBase.json';

export const getBatteryForVehicle = (make, model) => {
  return batteryData.find(
    (item) => item.make.toLowerCase() === make.toLowerCase() && item.model.toLowerCase() === model.toLowerCase()
  );
};
