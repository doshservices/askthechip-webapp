export const getUsername = (data) => {
  const username =
    data?.user?.role === "BUSINESS"
      ? `${data?.user?.firstName} ${data?.user?.lastName}`
      : `${data?.user?.companyName}`;
  return username;
}
export const getUserInitial = (data) => {
  const username =
    data?.user?.role === "USER"
      ? `${data?.user?.firstName} ${data?.user?.lastName}`
      : `${data?.user?.companyName}`;
  return username[0];
}