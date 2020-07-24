export const join = (req, res) => res.render("join", { pageTitle: "Join"});
export const login = (req, res) => res.render("login", { pageTitle: "Login"});
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout"});
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("UserDetail", { pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("EditProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword"});