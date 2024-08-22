interface DataItem {
  key: string;
  label: string;
  icon: string;
  description: string;
  url: string;
}

export interface CompanyDataType {
  company_name: string;
  logo: string;
  plane: string;
  description: string;
  features: string[];
  data: DataItem[];
}

export interface ControlType {
  id: number;
  name: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface KpisType {
  id: number;
  name: string;
  value: number;
  description: string;
  target: number;
  controls: ControlType[];
  created_at: string;
  updated_at: string;
}
