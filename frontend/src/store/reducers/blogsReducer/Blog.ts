export interface Job {
  id: number;
  name: string;
  seo_url: string;
}

interface History {
  overall: number;
  on_budget: number;
  on_time: number;
  positive: number;
  all: number;
  reviews: number;
  incomplete_reviews: number;
  complete: number;
  incomplete: number;
  completion_rate: number;
}

interface Location {
  country: string;
  flag_url: string;
  code: string;
  city: string;
}

interface Status {
  payment_verified: boolean;
  email_verified: boolean;
  deposit_made: boolean;
  profile_complete: boolean;
  phone_verified: boolean;
  identity_verified: boolean;
  facebook_connected: boolean;
  freelancer_verified_user: boolean;
  linkedin_connected: boolean;
  custom_charge_verified: boolean;
}

interface Currency {
  id: number;
  code: string;
  sign: string;
  name: string;
  exchange_rate: number;
  country: string;
}

interface Timezone {
  id: number;
  country: string;
  timezone: string;
  offset: number;
}

export class Blog {
  _id: string = "";
  appended_descr: string = "";
  bidperiod: number = 0;
  completedProjects: number = 0;
  currency_details: Currency = {
    id: 8,
    code: "EUR",
    sign: "€",
    name: "Euro",
    exchange_rate: 1.084511,
    country: "EU",
  };
  deleted: boolean = false;
  featured: boolean = false;
  fulltime: boolean = false;
  hideBids: boolean = false;
  hireme: boolean = false;
  jobs_details: Array<Job> = [];
  language: string = "";
  maxbudget: number = 0;
  minbudget: number = 0;
  non_compete: boolean = false;
  nopublic: boolean = false;
  overallReputation: number = 0;
  projIsHourly: boolean = false;
  project_management: boolean = false;
  qualified: boolean = false;
  recruiter: boolean = false;
  reviews: number = 0;
  sealed: boolean = false;
  time_submitted: number = 0;
  title: string = "";
  type: string = "";
  urgent: boolean = false;
  userid: number = 0;
  username: string = "";
  avatar: string = "";
  entire_history: History = {
    overall: 0,
    on_budget: 0,
    on_time: 0,
    positive: 0,
    all: 0,
    reviews: 0,
    incomplete: 0,
    complete: 0,
    incomplete_reviews: 0,
    completion_rate: 0,
  };
  registration_date: number = 0;
  display_name: string = "";
  location: Location = {
    country: "",
    flag_url: "",
    city: "",
    code: "",
  };
  role: string = "employer";
  status: Status = {
    payment_verified: true,
    email_verified: true,
    deposit_made: true,
    profile_complete: false,
    phone_verified: true,
    identity_verified: false,
    facebook_connected: false,
    freelancer_verified_user: false,
    linkedin_connected: false,
    custom_charge_verified: false,
  };
  primary_currency: Currency = {
    id: 8,
    code: "EUR",
    sign: "€",
    name: "Euro",
    exchange_rate: 1.084511,
    country: "EU",
  };
  primary_language: string = "";
  public_name: string = "";
  company: string = "";
  timezone: Timezone = {
    id: 275,
    country: "IT",
    timezone: "Europe/Rome",
    offset: 1,
  };

  constructor(initializer?: any) {
    if(!initializer) return ;
    if(initializer._id) this._id = initializer._id;
    if(initializer.postData.appended_descr) this.appended_descr = initializer.postData.appended_descr;
    if(initializer.userData.avatar) this.avatar = initializer.userData.avatar;
    if(initializer.postData.bidperiod) this.bidperiod = initializer.postData.bidperiod;
    if(initializer.userData.company) this.company = initializer.userData.company;
    if(initializer.postData.completedProjects) this.completedProjects = initializer.postData.completedProjects;
    if(initializer.postData.currency_details) this.currency_details = initializer.postData.currency_details;
    if(initializer.postData.deleted) this.deleted = initializer.postData.deleted;
    if(initializer.userData.display_name) this.display_name = initializer.userData.display_name;
    if(initializer.userData.reputation.entire_history) this.entire_history = initializer.userData.reputation.entire_history;
    if(initializer.postData.featured) this.featured = initializer.postData.featured;
    if(initializer.postData.fulltime) this.fulltime = initializer.postData.fulltime;
    if(initializer.postData.hideBids) this.hideBids = initializer.postData.hidebids;
    if(initializer.postData.hireme) this.hireme = initializer.postData.hireme;
    if(initializer.postData.jobs_details) this.jobs_details = initializer.postData.jobs_details;
    if(initializer.postData.language) this.language = initializer.postData.language;
    if(initializer.userData.location) this.location = {
        city: initializer.userData.location.city,
        country: initializer.userData.location.country.name,
        flag_url: initializer.userData.location.country.flag_url,
        code: initializer.userData.location.country.code
    };
    if(initializer.postData.maxbudget) this.maxbudget = initializer.postData.maxbudget;
    if(initializer.postData.minbudget) this.minbudget = initializer.postData.minbudget;
    if(initializer.postData.non_compete) this.non_compete = initializer.postData.non_compete;
    if(initializer.postData.nopublic) this.nopublic = initializer.postData.nopublic;
    if(initializer.postData.overallReputation) this.overallReputation = initializer.postData.overallReputation;
    if(initializer.userData.primary_currency) this.primary_currency = {...initializer.userData.primary_currency};
    if(initializer.userData.primary_language) this.primary_language = initializer.userData.primary_language;
    if(initializer.postData.projIsHourly) this.projIsHourly = initializer.postData.projIsHourly;
    if(initializer.postData.project_management) this.project_management = initializer.postData.project_management;
    if(initializer.userData.public_name) this.public_name = initializer.userData.public_name;
    if(initializer.postData.qualified) this.qualified = initializer.postData.qualified;
    if(initializer.postData.recruiter) this.recruiter = initializer.postData.recruiter;
    if(initializer.userData.registration_date) this.registration_date = initializer.userData.registration_date;
    if(initializer.postData.reviews) this.reviews = initializer.postData.reviews;
    if(initializer.userData.role) this.role = initializer.userData.role;
    if(initializer.postData.sealed) this.sealed = initializer.postData.sealed;
    if(initializer.userData.status) this.status = initializer.userData.status;
    if(initializer.postData.time_submitted) this.time_submitted = initializer.postData.time_submitted;
    if(initializer.userData.timezone) this.timezone = initializer.userData.timezone;
    if(initializer.postData.title) this.title = initializer.postData.title;
    if(initializer.postData.type) this.type = initializer.postData.type;
    if(initializer.postData.urgent) this.urgent = initializer.postData.urgent;
    if(initializer.userData.id) this.userid = initializer.userData.id;
    if(initializer.userData.username) this.username = initializer.userData.username;
  }

}
