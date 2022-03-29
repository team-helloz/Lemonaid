interface IHospital {
  type: string;
  distance: number;
  no: number;
  opentime: {
    no: number;
    opentime_sun: number;
    closetime_sun: number;
    opentime_mon: number;
    closetime_mon: number;
    opentime_tue: number;
    closetime_tue: number;
    opentime_wed: number;
    closetime_wed: number;
    opentime_thu: number;
    closetime_thu: number;
    opentime_fri: number;
    closetime_fri: number;
    opentime_sat: number;
    closetime_sat: number;
  };
  name: string;
  tel: string;
  number_of_doctors: number;
  lat: number;
  lng: number;
  code: number;
  code_name: string;
  address: string;
  url: null;
  build_code: string;
  emergency_day: string;
  emergency_night: string;
  parking_count: number;
}

export type { IHospital };
