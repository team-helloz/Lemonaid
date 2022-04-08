interface IHospital {
  type: string;
  distance: number;
  medical_subject_list: [
    {
      no: number;
      name: string;
    }
  ];
  no: number;
  opentime: {
    no: number;
    opentime_valid: string;
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

    opentime_sun_str: string;
    closetime_sun_str: string;
    opentime_mon_str: string;
    closetime_mon_str: string;
    opentime_tue_str: string;
    closetime_tue_str: string;
    opentime_wed_str: string;
    closetime_wed_str: string;
    opentime_thu_str: string;
    closetime_thu_str: string;
    opentime_fri_str: string;
    closetime_fri_str: string;
    opentime_sat_str: string;
    closetime_sat_str: string;
  };
  name: string;
  tel: string;
  lat: number;
  lng: number;
  code: number;
  code_name: string;
  address: string;
  url: string;
  emergency_day: string;
  emergency_night: string;
  parking_count: number;
  openornot: string;
  opendays: string;
}

interface ICoord {
  lat: number;
  lng: number;
}

export type { IHospital, ICoord };
