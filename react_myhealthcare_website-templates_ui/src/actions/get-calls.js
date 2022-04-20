// =============================================================================
// API TO GET API
// =============================================================================

import axiosClient from "./api-handler";

//get list of countries
export async function countries() {
  const response = await axiosClient.get(
    `/template-parts/order-medicine/countries.json`
  );
  return response;
}

//get indian cities list
export async function indianCities(diagnostic, page) {
  const response = await axiosClient.get(`/patients/web/v2/patients/indian-city?is_diagnostic=${diagnostic}&page=${page}
`);
  return response;
}

//get configurations
export async function configurations() {
  const response = await axiosClient.get(`/patients/web/v2/configurations`);
  return response;
}

//get hostpitals by cities
export async function hospitalByCity(lat, lng) {
  const response = await axiosClient.get(`/patients/web/v2/hospitals-by-city?lat=${lat}&lng=${lng}
`);
  return response;
}

//get specialities
export async function specialities(id) {
  const response = await axiosClient.get(`/patients/web/v2/specialities?hospital_id=${id}
`);
  return response;
}

//get hospitals by id
export async function hetHospitals(id) {
  const response = await axiosClient.get(`/patients/web/v2/hospitals/${id}`);
  return response;
}

/**
 * ! what is dynamic parameter in the api
 * ^location of the clinic will be retrived from the clinic only
 */

//get clinic distance
export async function clinicDistance() {
  const response = await axiosClient.get(
    `/patients/web/v2/patinets/clinic-distance`
  );
  return response;
}

//get doctors Availability
export async function getDocAvailability() {
  const response = await axiosClient.get(
    `/patients/web/v2/doctors/2054/availability`
  );
  return response;
}

//get profile inforamtion
export async function getProfile() {
  const response = await axiosClient.get(`/patients/web/v2/patients/profile`);
  return response;
}
/**
 * ! what is dynamic parameter in the api
 * ^add family memeber -> process diagram Reference
 */

//get family member information
export async function familyMember(familyMember) {
  const response = await axiosClient.get(
    `/specialities/75/doctors/2057/user/account/${familyMember}`
  );
  return response;
}

/**
 * ! what is dynamic parameter in the api
 * ^ Work in progress
 */

//get availability time slots
export async function timeslots(time) {
  const response = await axiosClient.get(`/patients/web/v2/doctors/1630/availability-timeslots?${time}
`);
  return response;
}

//get indian pincode API
export async function indianPincode(pincode) {
  const response = await axiosClient.get(`/patients/web/v2/patients/get-indian-pincode?pincode=${pincode}
`);
  return response;
}
/**
 * ! what is dynamic parameter in the api
 */

//get time slot with lab/ hospital name
export async function getTimeslotByHospital() {
  const response = await axiosClient.get(`/patients/web/v2/patients/lalpath-slots-availability?
`);
  return response;
}

/**
 * ! what is dynamic parameter in the api
 */

//get thyrocare test details
export async function thyrocareTestDetails() {
  const response = await axiosClient.get(`/patients/web/v2/patients/thyrocare-test-Details?
`);
  return response;
}

//get thyrocare list products
export async function thyrocareListProducts() {
  const response = await axiosClient.get(`/patients/web/v2/patients/thyrocare-list-product
`);
  return response;
}

/**
 * ! what is dynamic parameter in the api
 * ^waiting for clarification
 */
//get thyrocare list products
export async function testDetails() {
  const response = await axiosClient.get(`/patients/web/v2/patients/get-test-details?
`);
  return response;
}

/**
 * ! what is dynamic parameter in the api
 * ^waiting for clarification
 */
//get patient vendors
export async function patientVendor() {
  const response = await axiosClient.get(`/patients/web/v2/patients/lalpath-cities?
`);
  return response;
}

/**
 * ! what is dynamic parameter in the api
 */
//get vendor name
export async function vendorName() {
  const response = await axiosClient.get(
    `/patients/web/v2/patients/lalpath-cities?`
  );
  return response;
}

/**
 * ! what is dynamic parameter in the api
 */
//get patient get medicine order via pincode
export async function medicinePincode(pincode) {
  const response = await axiosClient.get(`/patients/ios/v2/website/get-onemgpincode?${pincode}
`);
  return response;
}
