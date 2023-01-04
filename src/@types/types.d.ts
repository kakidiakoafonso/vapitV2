type ICitie = {
  id: Number;
  name: String;
  state_id: Number;
  status: Number;
  created_at: String;
  updated_at: String;
  url: String[];
  weather: IWeather
};

type ILine = {
  id: Number;
  name: String;
  code: String;
  company: String | null;
  allow_ads: Number;
  status: Number;
  city_id: Number;
  bus_color_id: String;
  bus_category_id: Number;
  created_at: String;
  updated_at: String;
  color_of_bus: String;
  category_of_bus: String;
  adverts: IAdverts[];
};

type IStop = {
  id: Number;
  code: String;
  name: String;
  direction: String;
  line_id: Number;
  bus_stop_type_id: Number;
  created_at: String;
  updated_at: String;
  bus_stop_type: String;
  schedules: ISchedule[];
};

type IDay = "Dia Útil" | "Sábado" | "Domingos e Feriados";

type ISchedule = {
  id: Number;
  time: String;
  company: String;
  way: String;
  adapted: boolean;
  bus_stop_id: Number;
  day: IDay;
  payment_method: String;
  created_at: String;
  updated_at: String;
};

type IWeather = {
  weather: IweatherDetails;
  temperature: Number;
  name: string;
};

type IweatherDetails = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type IAdverts = {
  id: Number;
  description: String;
  slug: String;
  title: String;
  width: Number;
  height: Number;
  end_date: String;
  link: String;
  line_id: Number;
  url: String;
  dimensions: String;
};
