// Временный API service для разработки
export const postsAPI = {
  getAllPosts: () => Promise.resolve({ data: [] }),
  getPostById: (id) => Promise.resolve({ data: {} }),
};

export const authAPI = {
  login: () => Promise.resolve({ data: {} }),
  register: () => Promise.resolve({ data: {} }),
};

export const userAPI = {
  getUser: () => Promise.resolve({ data: {} }),
};
