var url;

if (process.env.NODE_ENV == "development") {
  var url = "http://127.0.0.1:8000";
} else {
  var url = "/backend";
}

export const state = () => ({
  getCategoriesWithPackages: url + "/categories_with_packages",

  getPackageWithId: url + "/packagewithid/",

  getTripComments: url + "/trip_comments",

  getMainCategories: url + "/main_categories",

  getTourPackageByIdWithPackages: url + "/tour_package_with_packages/",

  getPackagesByCategoryId: url + "/packages_by_category_id/",

  getCategoryById: url + "/get_category_by_id/",

  postPackageQuery: url + "/package_query_post",

  searchPackages: url + "/package_search?search=",

  getBlogs: url + "/blog_view",

  getBlogById: url + "/blogbyid/",

  searchBlogs: url + "/blog_search?search="
});

export const getters = {};
