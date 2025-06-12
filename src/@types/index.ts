export interface UserType {
  name: string;
  age: number;
}

export type Status = "success" | "error" | "pending";

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}



export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];
  name: string;
  order_list: [];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];
  name: string;
  order_list: [];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}