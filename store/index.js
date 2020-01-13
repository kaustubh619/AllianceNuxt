import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const state = () => {
  return {};
};

export const mutations = {};

export const actions = {
  getCategoriesWithPackages({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoriesWithPackages,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getPackageWithId({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getPackageWithId + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getTripComments({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getTripComments,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getMainCategories({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getMainCategories,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getTourPackageByIdWithPackages({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getTourPackageByIdWithPackages + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getPackagesByCategoryId({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getPackagesByCategoryId + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getCategoryById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryById + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  postPackageQuery({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.postPackageQuery,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  searchPackages({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.searchPackages + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getBlogs({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getBlogs,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getBlogById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getBlogById + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  searchBlogs({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.searchBlogs + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  }
};
